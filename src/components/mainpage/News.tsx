"use client";

// CORE
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

// ASSETS
import { Grid, Paper, Typography } from "@mui/material";
import { convertFirebaseTimestamp } from "@/functions/convert-firebase-timestamp";

//COMPONENTS
import { Posts } from "../models/posts";
import { FootballLoader } from "../layout/loader/loader";

// FIREBASE
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebase/config/clientApp";

// TYPES
import { postParams } from "@/app/posts/(post)/[id]/page";

const news: Posts[] = [
  {
    id: "1",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
  {
    id: "2",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
  {
    id: "3",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
  {
    id: "4",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
  {
    id: "5",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
  {
    id: "6",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
  {
    id: "7",
    title: "Tytuł przykładowego posta",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
    date: new Date(),
  },
];

export const News = () => {
  const [posts, setPosts] = useState<postParams[] | []>([]);

  const fetchNews = async () => {
    const postsCollection = collection(db, "posts");

    const sortedQuery = query(postsCollection, orderBy("date", "asc"));

    const querySnapshot = await getDocs(sortedQuery);

    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setPosts(data.reverse().slice(0, 7));
  };

  const truncateString = (string: string, limit: number) => {
    if (string.length > 25) {
      return string.substring(0, limit) + "...";
    }
    return string;
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid
        item
        sx={{
          textAlign: "center",
          background:
            "linear-gradient(90deg, #5a9628 0%, #005A9C 50%, #5a9628 100%)",
          color: "#FFFFFF",
        }}
        xs={12}
        sm={8}
        mt={6}
      >
        <Typography variant="h1" mt={3} mb={3}>
          Aktualności
        </Typography>
      </Grid>
      {posts.length !== 0 ? (
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="stretch"
            justifyContent="center"
            sx={{ rowGap: { xs: 1, sm: 0 } }}
          >
            <>
              <Grid item xs={12} md={3} sx={{ margin: "10px 0" }}>
                <Link
                  href={`posts/${posts[0]?.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Paper sx={{ height: "100%", padding: "10px" }}>
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-start"
                      justifyContent="space-between"
                      sx={{ height: "inherit" }}
                    >
                      <Grid item container direction="row">
                        <Grid item xs={12}>
                          <img
                            src={posts[0].file && posts[0].file}
                            alt="post image"
                            style={{ width: "100%" }}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ padding: "10px 0" }}>
                          <Typography variant="h4" component="h3">
                            {posts[0]?.title}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        {posts[0]?.date && (
                          <Typography variant="caption">
                            {dayjs(
                              convertFirebaseTimestamp(posts[0]?.date)
                            ).format("DD/MM/YYYY")}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Paper>
                </Link>
              </Grid>
              <Grid
                container
                item
                direction="row"
                alignItems="stretch"
                xs={12}
                md={5}
              >
                {posts.slice(1).map((post) => (
                  <Grid
                    item
                    xs={6}
                    sm={4}
                    key={post.id}
                    sx={{ padding: { xs: "0", sm: "10px" } }}
                  >
                    <Link
                      href={`posts/${post.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Paper sx={{ height: "100%" }}>
                        <Grid
                          container
                          direction="row"
                          alignItems="flex-start"
                          justifyContent="space-between"
                          sx={{ padding: "10px", height: "inherit" }}
                        >
                          <Grid item xs={12} sx={{ height: "inherit" }}>
                            <Grid
                              item
                              justifyContent={"center"}
                              sx={{
                                position: "relative",
                                width: "100%",
                                textAlign: "center",
                              }}
                            >
                              <img
                                src={post.file && post.file}
                                alt="post image"
                                style={{
                                  maxWidth: "100%",
                                  height: "auto",
                                }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography
                                variant="h4"
                                component="h4"
                                sx={{ minHeight: "64px", paddingTop: "10px" }}
                              >
                                {post.title}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid
                            item
                            xs={12}
                            sx={{ position: "relative", bottom: "15px" }}
                          >
                            {post?.date && (
                              <Typography variant="caption">
                                {dayjs(
                                  convertFirebaseTimestamp(post?.date)
                                ).format("DD/MM/YYYY")}
                              </Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Paper>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12}>
          <FootballLoader fixed={false} />
        </Grid>
      )}
    </Grid>
  );
};
