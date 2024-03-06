// CORE
"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

// ASSETS
import { Grid, Paper, Typography } from "@mui/material";
import { convertFirebaseTimestamp } from "@/functions/convert-firebase-timestamp";
import draftToHtml from "draftjs-to-html";
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
  const [post, setPost] = useState<postParams | null>();

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
          alert("Post not found");
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
            <Paper>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Grid item xs={12}>
                  <img
                    src={post.file}
                    alt="post image"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
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
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DisplayPost;
