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
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            xs={10}
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://postolowo.com/"}>
                <Image
                  src={postolowoLogo}
                  alt={"postolowo logo"}
                  width={150}
                  height={150}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://www.gscore.eu/en"}>
                <Image
                  src={gscoreLogo}
                  alt={"gescore logo"}
                  width={210}
                  height={70}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://www.binowopark.pl/index.php"}>
                <Image
                  src={binowoLogo}
                  alt={"binowo"}
                  width={210}
                  height={100}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://lisiapolana.pl/"}>
                <Image
                  src={lisiaPolanaLogo}
                  alt={"lisia polana"}
                  width={210}
                  height={150}
                  style={{
                    border: "1px solid white",
                    borderRadius: "100px",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://alte-farm.pl/"}>
                <Image
                  src={atleFarmLogo}
                  alt={"atle farm logo"}
                  width={200}
                  height={150}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
