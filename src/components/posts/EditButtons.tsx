"use client";
// CORE
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// ASSETS
import { Button, Grid, Paper, Typography } from "@mui/material";
// FIREBASE
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase/config/clientApp";

// TYPES
import { postParams, pageProps } from "@/app/posts/(post)/[id]/page";
interface Iprops {
  id: string;
  setEditionActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditButtons = ({ id, setEditionActive }: Iprops) => {
  const [toDelete, setToDelete] = useState(false);
  const router = useRouter();
  const deletePost = async () => {
    await deleteDoc(doc(db, "posts", id))
      .then(() => {
        alert("Post usunięty!");
        router.replace("/");
        router.refresh();
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {toDelete ? (
          <>
            <Grid item>
              <Button variant="contained" onClick={() => setToDelete(false)}>
                Nie{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                onClick={() => deletePost()}
              >
                Tak{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                style={{ color: "red", textAlign: "center" }}
              >
                Na pewno chcesz usunąć ten post?
              </Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Button
                variant="contained"
                onClick={() => setEditionActive(true)}
              >
                Edytuj{" "}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                onClick={() => setToDelete(true)}
              >
                Usuń{" "}
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default EditButtons;
