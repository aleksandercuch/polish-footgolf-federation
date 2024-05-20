"use client";
// CORE
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// ASSETS
import { Button, Grid, Paper, Typography } from "@mui/material";

// FIREBASE
import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../../../firebase/config/clientApp";
import { deleteObject, ref } from "firebase/storage";

// TYPES
import { postParams, pageProps } from "@/app/posts/(post)/[id]/page";

interface Iprops {
  id: string;
  name: string;
  setEditionActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditButtons = ({ id, name, setEditionActive }: Iprops) => {
  const [toDelete, setToDelete] = useState(false);
  const router = useRouter();
  const deletePost = async () => {
    const deleteRef = ref(storage, `postsImages/${name}`);
    await deleteDoc(doc(db, "posts", id))
      .then(() => {
        deleteObject(deleteRef).then(() => {
          alert("Post usunięty!");
          router.replace("/");
          router.refresh();
        });
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
