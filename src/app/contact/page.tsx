"use client";

// CORE
import React from "react";

// COMPONENTS
import { PageHeader } from "@/components/reusable/page-title/page-title";

// ASSETS
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";

const page = () => {
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
          sm={8}
          xs={12}
          mt={6}
          mb={6}
        >
          <Typography variant="h3" component="h2" mt={3} mb={2}>
            Kontakt z PFFG
          </Typography>
        </Grid>

        <Grid item sm={8} xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1">
            <strong>POLSKA FEDERACJA FOOTGOLFA</strong>
          </Typography>
          <Typography variant="subtitle1">
            <strong>Al. Zwycięstwa 51, 80-213 Gdańsk</strong>
          </Typography>
          <Typography variant="subtitle1">
            <strong>KRS 0000632232, REGON 365181272, NIP 9571088145</strong>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
