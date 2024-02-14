"use client";

// CORE
import React from "react";
import Image from "next/image";

// ASSETS
import { Grid, Paper, Typography } from "@mui/material";

//COMPONENTS
import { Posts } from "../models/posts";

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

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={10}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            Aktualności
          </Typography>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={8}>
              <Paper>
                <Grid
                  container
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <Grid item xs={4}>
                    <img
                      src={news[0].image}
                      alt="post image"
                      style={{ height: "auto", width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={8}>
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
                              {news[0].title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography variant="caption">
                              22.10.2991{/* {news[0].date} */}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1">
                          {news[0].text}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>Reszta</Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
