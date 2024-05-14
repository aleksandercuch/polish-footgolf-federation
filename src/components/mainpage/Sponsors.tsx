"use client";

// CORE
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ASSETS
import { Grid, Typography } from "@mui/material";
import { FootballLoader } from "../layout/loader/loader";

// FUNCTIONS
import { returnImagesFromPaths } from "@/functions/get-image";

export const Sponsors = () => {
  const [sponsors, setSponsors] = useState<string[]>([]);
  const paths = [
    "logos/ndiLogo.avif",
    "logos/elnaft.jpg",
    "logos/pzu.png",
    "logos/jungle.png",
  ];

  useEffect(() => {
    returnImagesFromPaths(paths, setSponsors);
  }, []);
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
          {sponsors.length ? (
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
                <Link href={"https://www.ndi.pl/nieruchomosci"}>
                  <img
                    src={(sponsors.length && sponsors[0]) || ""}
                    alt={"ndi logo"}
                    style={{ width: "210px", height: "70px" }}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={2} mb={10}>
                <Link href={"http://elnaft.com/"}>
                  <img
                    src={(sponsors.length && sponsors[1]) || ""}
                    alt={"elnaft logo"}
                    style={{
                      background: "black",
                      padding: "10px",
                      border: "1px solid red",
                      borderRadius: "50px",
                      width: "210px",
                      height: "70px",
                    }}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={2} mb={10}>
                <Link
                  href={`https://zdrowie.pzu.pl/sklep/pakiety-medyczne?gad_source=1&gclid=Cj0KCQjwq86wBhDiARIsAJhuphlOl2dgofzn-HFV1TWdu1hEndABaysAbTy_6Sp00cfeAK5NJ0VqwNAaAtQaEALw_wcB&gclsrc=aw.ds`}
                >
                  <img
                    src={(sponsors.length && sponsors[2]) || ""}
                    alt={"pzu logo"}
                    width={270}
                    height={150}
                    style={{ width: "270px", height: "150px" }}
                  />
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} md={2} mb={10}>
                <Link href={"https://jungla-gdansk.pl/"}>
                  <img
                    src={(sponsors.length && sponsors[3]) || ""}
                    alt={"jungle logo"}
                    style={{ width: "210px", height: "120px" }}
                  />
                </Link>
              </Grid>
            </Grid>
          ) : (
            <Grid item xs={12}>
              <FootballLoader fixed={false} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
