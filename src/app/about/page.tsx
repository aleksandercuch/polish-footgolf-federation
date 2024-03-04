// CORE
"use client";
import React from "react";
import { FC } from "react";

// ASSETS
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
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
          mb={6}
        >
          <Typography variant="h3" component="h2" mt={3} mb={2}>
            Polska Federacja Footgolfa
          </Typography>
        </Grid>

        <Grid item xs={8}></Grid>
      </Grid>
    </>
  );
};

export default page;
