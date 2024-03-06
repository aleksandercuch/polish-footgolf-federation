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
import { Audio } from "react-loader-spinner";
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

  useEffect(() => {
    fetchNews();
  }, []);

  return (
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
            Aktualności
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="center"
            sx={{ rowGap: { xs: 1, sm: 0 } }}
          >
            {posts ? (
              <>
                <Grid
                  item
                  xs={12}
                  sm={3}
                  sx={{ padding: { xs: "0", sm: "10px 10px 10px 0" } }}
                >
                  <Link
                    href={`posts/${posts[0]?.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Paper>
                      <Grid
                        container
                        direction="column"
                        alignItems="flex-start"
                        justifyContent="center"
                      >
                        <Grid item xs={4}>
                          {posts[0]?.file && (
                            <img
                              src={posts[0].file}
                              alt="post image"
                              style={{
                                height: "auto",
                                width: "100%",
                                minHeight: "300px",
                              }}
                            />
                          )}
                        </Grid>
                        <Grid item xs={8} sx={{ padding: "10px" }}>
                          <Grid
                            container
                            direction="column"
                            alignItems="fles-start"
                            justifyContent="flex-start"
                            mt={5}
                            gap={3}
                          >
                            <Grid item>
                              <Grid container direction="column" gap={2}>
                                <Grid item>
                                  <Typography variant="h4" component="h3">
                                    {posts[0]?.title}
                                  </Typography>
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
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Grid
                    container
                    item
                    direction="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    xs={12}
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
                          <Paper>
                            <Grid
                              container
                              direction="column"
                              alignItems="flex-start"
                              justifyContent="center"
                              sx={{ padding: "10px" }}
                            >
                              <Grid item xs={12}>
                                <img
                                  src={post.file}
                                  alt="post image"
                                  style={{
                                    height: "auto",
                                    width: "100%",
                                    maxHeight: "150px",
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6" component="h4">
                                  {post.title}
                                </Typography>
                              </Grid>
                              <Grid item xs={12}>
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
                </Grid>
              </>
            ) : (
              <Grid item>
                <FootballLoader />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
