"use client";
//CORE
import React from "react";

// ASSETS
import { Grid } from "@mui/material";

// COMPONENTS
import { News } from "@/components/mainpage/News";

export default function Home() {
  return (
    <>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={12}>
          <News />
        </Grid>
      </Grid>
    </>
  );
}
