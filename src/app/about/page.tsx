"use client";
// CORE
import React from "react";
import { FC } from "react";

// ASSETS
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

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
              "linear-gradient(90deg, #5a9628 0%, #005A9C 50%, #5a9628 100%)",
            color: "#FFFFFF",
          }}
          xs={12}
          sm={8}
          mt={6}
          mb={6}
        >
          <Typography variant="h3" component="h2" mt={3} mb={2}>
            Polska Federacja Footgolfa
          </Typography>
        </Grid>

        <Grid item sm={8} xs={12}>
          <Paper sx={{ padding: "0 15px 15px" }}>
            <Grid
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              typography={"subtitle1"}
              sx={{ textAlign: "left" }}
              gap={10}
            >
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                >
                  <SportsSoccerIcon />

                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>ZARZĄD PFFG</strong>
                    </Typography>
                  </Grid>

                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent={"space-evenly"}
                  sx={{ textAlign: "center" }}
                  gap={10}
                >
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    xs={12}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Rafał Bielawa</Typography>
                      <Typography variant="h6">Prezes</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    sm={3}
                    xs={12}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Grzegorz Wardowski</Typography>
                      <Typography variant="h6">Członek Zarządu</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    sm={3}
                    xs={12}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">
                        Bartłomiej Karasiewicz
                      </Typography>
                      <Typography variant="h6">Wiceprezes</Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    justifyItems={"center"}
                    alignContent={"center"}
                    direction="column"
                    sm={3}
                    xs={12}
                    gap={3}
                  >
                    <Grid item sx={{ margin: "auto" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
                        sx={{ width: 150, height: 150 }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="h5">Karol Kusaj</Typography>
                      <Typography variant="h6">Członek Zarządu</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  mt={5}
                  mb={5}
                >
                  <SportsSoccerIcon />
                  <Grid item>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", padding: "0 10px" }}
                    >
                      <strong>HISTORIA FOOTGOLFA</strong>
                    </Typography>
                  </Grid>
                  <SportsSoccerIcon />
                </Grid>
                <Grid item mt={5} mb={5}>
                  <Divider />
                </Grid>
                <Grid
                  container
                  item
                  direction="column"
                  sx={{ textAlign: "center" }}
                >
                  <Typography variant="subtitle1">
                    Historia footgolfa w Polsce sięga 2014 roku, kiedy to w
                    Postołowie, niedaleko Gdańska, powstało pierwsze pole do gry
                    w footgolfa.
                  </Typography>
                  <Typography variant="subtitle1">
                    Dzięki temu zaczęto tam uprawiać tę dyscyplinę.
                  </Typography>
                  <Typography variant="subtitle1">
                    Powstała pierwsza Liga Footgolfa, a następnie rozegrano
                    pierwsze oficjalne Mistrzostwa Polski.
                  </Typography>
                  <Typography variant="subtitle1">
                    Kolejnym krokiem było założenie stowarzyszenia pod nazwą
                    Polska Federacja Footgolfa (PFFG).
                  </Typography>
                  <Typography variant="subtitle1">
                    Dzięki staraniom w 2021 roku została członkiem
                    Międzynarodowej Federacji Footgolfa – FIFG, która obejmuje
                    prawie czterdzieści krajów z całego świata.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
