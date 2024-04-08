"use client";
// CORE
import Image from "next/image";

// ASSETS
import { Divider, Grid } from "@mui/material";

// COMPONENTS
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "150px" }}
    >
      <Grid
        item
        xs={12}
        sx={{
          textAlign: "center",
          position: "relative",
          marginBottom: "90px",
        }}
      >
        <Divider
          sx={{
            border: "none",
            background:
              "linear-gradient(90deg, #005A9C 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,1) 55%, #005A9C 100%)",
            height: "6px",
          }}
        />
        <Image
          src={"/logo.png"}
          alt="logo"
          height={170}
          width={120}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </Grid>
      <Grid item container xs={4} justifyContent="space-between">
        <Grid item xs={12} sm={3}>
          <FooterLink url={"/"} name={"Start"} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterLink url={"/about"} name={"O nas"} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterLink url={"/statue"} name={"Regulamin"} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FooterLink url={"/contact"} name={"Kontakt"} />
        </Grid>
      </Grid>
    </Grid>
  );
};
