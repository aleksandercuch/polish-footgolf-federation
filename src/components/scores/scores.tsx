"use client";

// CORE
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/context/auth-context";
import { Controller, useForm } from "react-hook-form";

// ASSETS
import { Button, FormControl, Grid } from "@mui/material";

//COMPONENTS
import { FootballLoader } from "../layout/loader/loader";

// FIREBASE
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../../../firebase/config/clientApp";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { MuiFileInput } from "mui-file-input";

interface scoreParams {
  id: string;
  name: string;
  link: any;
  date: Date;
}

export const Scores = () => {
  const [scores, setScores] = useState<any>([]);
  const currentUser = UserAuth();

  const form = useForm<scoreParams>({
    defaultValues: {
      link: undefined,
      date: new Date(),
    },
  });

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, errors },
  } = form;

  const submitForm = (data: scoreParams) => {
    const storageRef = ref(storage, `scores/${data.link.name}`);
    uploadBytes(storageRef, data.link)
      .then(async (snapshot) => {
        const downloadURL = await getDownloadURL(snapshot.ref);
        addDoc(collection(db, "scores"), {
          link: downloadURL,
          name: data.link.name,
          date: data.date,
        }).then(() => {
          alert("Dodałeś tablicę wyników!");
          reset();
          fetchScores();
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const deleteScore = async (data: scoreParams) => {
    const deleteRef = ref(storage, `scores/${data.name}`);

    await deleteDoc(doc(db, "scores", data.id))
      .then(() => {
        deleteObject(deleteRef).then(() => {
          alert("Wynik usunięty!");
          fetchScores();
        });
      })
      .catch((error) => alert(error));
  };

  const fetchScores = async () => {
    const scoresCollection = collection(db, "scores");

    const sortedQuery = query(scoresCollection, orderBy("date", "asc"));

    const querySnapshot = await getDocs(sortedQuery);

    const data: scoreParams[] = [];
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        link: doc.data().link,
        date: doc.data().date,
        name: doc.data().name,
      });
    });
    setScores(data.reverse().slice(0, 13));
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <Grid container gap={10}>
      {currentUser?.user?.email && (
        <Grid item xs={12}>
          <FormControl
            component={"form"}
            onSubmit={handleSubmit(submitForm)}
            disabled={isSubmitting}
            sx={{ width: "100%" }}
          >
            <Controller
              name={"link"}
              control={control}
              render={({ field }) => (
                <MuiFileInput
                  inputProps={{ accept: ".png, .jpeg, .jpg" }}
                  {...field}
                />
              )}
            />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              <>Dodaj Wynik</>
            </Button>
          </FormControl>
        </Grid>
      )}
      {scores.length !== 0 ? (
        <>
          {scores.map((score: scoreParams) => (
            <Grid key={score.id} item xs={12} sx={{ position: "relative" }}>
              {currentUser?.user?.email && (
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  sx={{ position: "absolute", top: "10px", right: "10px" }}
                  onClick={() => deleteScore(score)}
                >
                  <>Usuń Wynik</>
                </Button>
              )}
              <img
                style={{ width: "100%" }}
                src={score.link}
                alt="Link error"
              />
            </Grid>
          ))}
        </>
      ) : (
        <Grid item xs={12}>
          <FootballLoader fixed={false} />
        </Grid>
      )}
    </Grid>
  );
};
