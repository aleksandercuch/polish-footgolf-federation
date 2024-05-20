"use client";
// CORE
import { useEffect, useState } from "react";

// ASSETS
import { Button, ButtonGroup, Grid } from "@mui/material";

// COMPONENTS
import { NavLink } from "./NavLink";
import { getDownloadURL, ref } from "firebase/storage";

// FIREBASE
import { storage } from "../../../../firebase/config/clientApp";

export const MainNavigation = () => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, "video/footgolf.mp4"))
      .then((url) => {
        setVideo(url);
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  }, []);
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
          src={video && video}
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
            <NavLink route={"/scores"} text={"WYNIKI"} />
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
            width: "100%",
            maxWidth: { xs: "70px", sm: "100px", md: "200px" },
          }}
        >
          <img
            src={"/logo.png"}
            alt="logo"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
