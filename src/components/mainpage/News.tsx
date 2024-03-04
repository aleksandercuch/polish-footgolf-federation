"use client";

// CORE
import React, { useState } from "react";
import Image from "next/image";

// ASSETS
import { Grid, Paper, Typography } from "@mui/material";

//COMPONENTS
import { Posts } from "../models/posts";
import { Audio } from "react-loader-spinner";
import { FootballLoader } from "../layout/loader/loader";

export const News = () => {
  const news: Posts[] = [
    {
      id: "1",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
    {
      id: "2",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
    {
      id: "3",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
    {
      id: "4",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
    {
      id: "5",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
    {
      id: "6",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
    {
      id: "7",
      title: "Tomasz lub jeść placki i jest fajny",
      text: "Tomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajnyTomasz lub jeść placki i jest fajny",
      image:
        "https://contents.mediadecathlon.com/p2525046/k$b65f339767c3bae59d59e4768a2dace3/sq/pilki-nozne-do-gry-11-osobowej.jpg?format=auto&f=800x0",
      date: new Date(),
    },
  ];

  const [posts, setPosts] = useState<Posts[] | []>(news);

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
                  <Paper>
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-start"
                      justifyContent="center"
                    >
                      <Grid item xs={4}>
                        <img
                          src={posts[0].image}
                          alt="post image"
                          style={{ height: "auto", width: "100%" }}
                        />
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
                                  {posts[0].title}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography variant="caption">
                                  22.10.2991{/* {posts[0].date} */}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <Typography variant="subtitle1">
                              {posts[0].text.substring(0, 100) + "..."}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Grid
                    container
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
                                src={post.image}
                                alt="post image"
                                style={{ height: "auto", width: "100%" }}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="h6" component="h4">
                                {post.title}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="caption">
                                22.10.2991{/* {news[0].date} */}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Paper>
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
