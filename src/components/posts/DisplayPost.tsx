// CORE
"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { UserAuth } from "@/context/auth-context";

// ASSETS
import { Button, Grid, Paper, Typography } from "@mui/material";
import { convertFirebaseTimestamp } from "@/functions/convert-firebase-timestamp";
import draftToHtml from "draftjs-to-html";

// COMPONENTS
import EditButtons from "./EditButtons";
import { AddPost, getParams } from "./AddPost";

// FIREBASE
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../../firebase/config/clientApp";

// TYPES
import { postParams, pageProps } from "@/app/posts/(post)/[id]/page";

const DisplayPost = ({ params }: pageProps) => {
  const [post, setPost] = useState<getParams | null>();
  const [editionActive, setEditionActive] = useState(false);
  const currentUser = UserAuth();

  const fetchPost = async () => {
    const postsCollection = collection(db, "posts");
    const postDocRef = doc(postsCollection, params.id);

    getDoc(postDocRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          // Document exists, you can access its data using docSnapshot.data()
          const postData = docSnapshot.data();

          setPost({
            id: params.id,
            title: postData.title,
            description: postData.description,
            file: postData.file,
            date: convertFirebaseTimestamp(postData.date),
          });
        } else {
          alert("Nie ma posta o takim id.");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {post && (
        <>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              item
              sx={{
                textAlign: "center",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1) 0%, #005A9C 50%, rgba(255,255,255,1) 100%)",
                color: "#FFFFFF",
              }}
              xs={8}
              mt={6}
            >
              <Typography variant="h3" component="h2" mt={3} mb={3}>
                {post.title}
              </Typography>
            </Grid>

            <Grid item xs={8}>
              {editionActive ? (
                <>
                  <Grid item xs={12}>
                    <Paper sx={{ padding: "20px" }}>
                      <AddPost
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        file={post.file}
                        date={post.date}
                      />
                      <Button
                        variant="contained"
                        fullWidth
                        color="error"
                        onClick={() => setEditionActive(false)}
                      >
                        Anuluj Edytowanie{" "}
                      </Button>
                    </Paper>
                  </Grid>
                </>
              ) : (
                <Paper>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                  >
                    <Grid
                      item
                      xs={12}
                      mb={3}
                      container
                      justifyContent={"center"}
                    >
                      <img
                        src={post.file}
                        alt="post image"
                        style={{
                          height: "auto",
                          borderRadius: "10px",
                          maxHeight: "400px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ padding: "0 15px 15px" }}>
                      <Typography
                        variant="h4"
                        component="h3"
                        sx={{ textAlign: "center" }}
                      >
                        {dayjs(post.date).format("DD/MM/YYYY")}
                      </Typography>
                      {currentUser?.user?.email && (
                        <EditButtons
                          id={params.id}
                          setEditionActive={setEditionActive}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} sx={{ padding: "0 15px 15px" }}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: draftToHtml(post.description),
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default DisplayPost;
