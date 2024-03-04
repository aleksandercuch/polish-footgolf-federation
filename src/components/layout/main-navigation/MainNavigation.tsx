"use client";
// CORE
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";

// ASSETS
import logo from "@/assets/logo.png";
import { Button, ButtonGroup, Grid } from "@mui/material";
import video from "../../../assets/img/video.mp4";

//COMPONENTS
import { NavLink } from "./NavLink";

export const MainNavigation = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <Grid item sx={{ width: "100%" }}>
        <video
          style={{ maxHeight: "600px", minWidth: "100%", objectFit: "fill" }}
          src={video}
          autoPlay
          loop
          muted
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          position: "absolute",
          textAlign: "center",
          top: 0,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <ButtonGroup variant="contained" sx={{ width: "100%", height: "60px" }}>
          <Button style={{ width: "100%", borderColor: "#FFFFFF" }}>
            <NavLink route={"/"} text={"STRONA GŁÓWNA"} />
          </Button>
          <Button style={{ width: "100%", borderColor: "#FFFFFF" }}>
            <NavLink route={"/about"} text={"O NAS"} />
          </Button>
          <Button style={{ width: "100%", borderColor: "#FFFFFF" }}>
            <NavLink route={"/statue"} text={"REGULAMIN"} />
          </Button>
          <Button style={{ width: "100%", borderColor: "#FFFFFF" }}>
            <NavLink route={"/contact"} text={"KONTAKT"} />
          </Button>
        </ButtonGroup>
      </Grid>

      <Grid
        item
        sx={{
          position: "absolute",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          width: "100%",
          heigth: "100%",
          top: "20%",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <Image src={logo.src} alt="logo" height={300} width={220} />
      </Grid>
    </Grid>
  );
};