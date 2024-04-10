"use client";

// CORE
import React from "react";
import Image from "next/image";
import Link from "next/link";

// ASSETS
import { Grid, Typography } from "@mui/material";
import * as elnaftLogo from "@/assets/logos/elnaft.jpg";
import * as jungleLogo from "@/assets/logos/jungle.png";
import * as pzuLogo from "@/assets/logos/pzu.png";

export const Sponsors = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        mt={10}
        mb={10}
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
            Sponsorzy
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
              <Link href={"https://www.ndi.pl/nieruchomosci"}>
                <Image
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/logos%2Fndi_development_cmyk.jpg?alt=media&token=25f64bb6-4018-42ae-948c-6b078e54cf3e"
                  }
                  alt={"ndi logo"}
                  width={210}
                  height={70}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"http://elnaft.com/"}>
                <Image
                  src={elnaftLogo}
                  alt={"elnaft logo"}
                  width={210}
                  height={70}
                  style={{
                    background: "black",
                    padding: "10px",
                    border: "1px solid red",
                    borderRadius: "50px",
                  }}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link
                href={`https://zdrowie.pzu.pl/sklep/pakiety-medyczne?gad_source=1&gclid=Cj0KCQjwq86wBhDiARIsAJhuphlOl2dgofzn-HFV1TWdu1hEndABaysAbTy_6Sp00cfeAK5NJ0VqwNAaAtQaEALw_wcB&gclsrc=aw.ds`}
              >
                <Image
                  src={pzuLogo}
                  alt={"pzu logo"}
                  width={270}
                  height={150}
                />
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={2} mb={10}>
              <Link href={"https://jungla-gdansk.pl/"}>
                <Image
                  src={jungleLogo}
                  alt={"jungle logo"}
                  width={210}
                  height={120}
                />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
