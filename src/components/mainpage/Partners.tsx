"use client";

// CORE
import React from "react";
import Image from "next/image";
import Link from "next/link";

// ASSETS
import { Grid, Typography } from "@mui/material";
import * as gscoreLogo from "@/assets/logos/gscore.png";
import * as binowoLogo from "@/assets/logos/binowo.jpg";
import * as lisiaPolanaLogo from "@/assets/logos/lisiaPolana.jpeg";
import * as atleFarmLogo from "@/assets/logos/alteFarm.jpeg";
import * as postolowoLogo from "@/assets/logos/postolowo.bmp";

export const Partners = () => {
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
          xs={12}
          sm={8}
          mt={6}
        >
          <Typography variant="h3" component="h2" mt={3} mb={3}>
            Partnerzy
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
          mt={10}
        >
          <Grid
            container
            item
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            xs={10}
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://postolowo.com/"}>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/logos%2Fpostolowo.bmp?alt=media&token=a72bc5fe-e027-4d87-84cd-bb42f5bf3895"
                  }
                  alt={"postolowo logo"}
                  style={{ width: "150px", height: "150px" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://www.gscore.eu/en"}>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/logos%2Fgscore.png?alt=media&token=1dedf616-4e7f-4114-9d2c-7315ef64ed9d"
                  }
                  alt={"gescore logo"}
                  style={{ width: "210px", height: "70px" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://www.binowopark.pl/index.php"}>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/logos%2Fbinowo.jpg?alt=media&token=ba077495-24e3-4686-a955-35dd348470f4"
                  }
                  alt={"binowo"}
                  style={{ width: "210px", height: "100px" }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://lisiapolana.pl/"}>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/logos%2FlisiaPolana.jpeg?alt=media&token=7b41d72c-0cd2-442c-b12c-533f387e68dd"
                  }
                  alt={"lisia polana"}
                  style={{
                    width: "210px",
                    height: "150px",
                    border: "1px solid white",
                    borderRadius: "100px",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://alte-farm.pl/"}>
                <img
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/logos%2FalteFarm.jpeg?alt=media&token=6f388c78-ecc2-4563-b20e-e8e8db267287"
                  }
                  alt={"atle farm logo"}
                  style={{ width: "200px", height: "150px" }}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
