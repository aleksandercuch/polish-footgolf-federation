// CORE
"use client";
import { FC } from "react";

// COMPONENTS
import { Login } from "@/components/login/Login";
import { Grid, Typography } from "@mui/material";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
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
          xs={8}
          mt={6}
          mb={6}
        >
          <Typography variant="h3" component="h2" mt={3} mb={2}>
            Logowanie do Admina
          </Typography>
        </Grid>

        <Grid item container justifyContent={"center"} xs={12}>
          <Login />
        </Grid>
      </Grid>
    </>
  );
};

export default page;
