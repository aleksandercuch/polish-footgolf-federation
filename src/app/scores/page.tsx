"use client";
// CORE
import React from "react";
import { FC } from "react";

// ASSETS
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

// COMPONENTS
import { Scores } from "@/components/scores/scores";

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
              "linear-gradient(90deg, #5a9628 0%, #005A9C 50%, #5a9628 100%)",
            color: "#FFFFFF",
          }}
          xs={12}
          sm={8}
          mt={6}
          mb={6}
        >
          <Typography variant="h1" mt={3} mb={2}>
            Wyniki
          </Typography>
        </Grid>

        <Grid item sm={8} xs={12}>
          <Scores />
        </Grid>
      </Grid>
    </>
  );
};

export default page;
