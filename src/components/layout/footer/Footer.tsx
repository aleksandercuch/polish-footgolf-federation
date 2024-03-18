"use client";
// CORE
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useSearchParams } from "next/navigation";
// ASSETS
import { Button, ButtonGroup, Divider, Grid } from "@mui/material";
import video from "../../../assets/img/video.mp4";
import theme from "@/theme";

// COMPONENTS
import { NavLink } from "../main-navigation/NavLink";

// FIREBASE
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../../../firebase/config/clientApp";

export const Footer = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
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
        <img
          src={"/logo.png"}
          alt="logo"
          style={{
            height: "170px",
            width: "120px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></img>
      </Grid>
      <Grid item container xs={4} justifyContent="space-between">
        <Grid item>
          <Link
            href={"/"}
            style={{
              textDecoration: "none",
              height: "60px",
              display: "inline-grid",
              alignContent: "center",
              width: "100%",
              color: "#005A9C",
            }}
          >
            Start
          </Link>
        </Grid>
        <Grid item>
          <Link
            href={"/about"}
            style={{
              textDecoration: "none",
              height: "60px",
              display: "inline-grid",
              alignContent: "center",
              width: "100%",
              color: "#005A9C",
            }}
          >
            O nas
          </Link>
        </Grid>
        <Grid item>
          <Link
            href={"/statue"}
            style={{
              textDecoration: "none",
              height: "60px",
              display: "inline-grid",
              alignContent: "center",
              width: "100%",
              color: "#005A9C",
            }}
          >
            Regulamin
          </Link>
        </Grid>
        <Grid item>
          <Link
            href={"/contact"}
            style={{
              textDecoration: "none",
              height: "60px",
              display: "inline-grid",
              alignContent: "center",
              width: "100%",
              color: "#005A9C",
            }}
          >
            Kontakt
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
