"use client";
// CORE
import Image from "next/image";
import { useSearchParams } from "next/navigation";
// ASSETS
import { Button, ButtonGroup, Grid } from "@mui/material";
import video from "../../../assets/img/footgolf.mp4";

// COMPONENTS
import { NavLink } from "./NavLink";

// FIREBASE

export const MainNavigation = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <Grid item xs={12}>
        <video
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
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
          zIndex: "1",
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
          top: { xs: "30%", sm: "20%" },
          textAlign: "center",
          padding: { xs: "25px 0", sm: "50px 0" },
        }}
      >
        <Grid
          item
          sx={{
            margin: "auto",
            height: { xs: "100px", sm: "180px", md: "300px" },
          }}
        >
          <Image
            src={"/logo.png"}
            fill
            alt="logo"
            style={{ objectFit: "contain" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
