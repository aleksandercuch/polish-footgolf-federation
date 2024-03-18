"use client";
// CORE
import { FC } from "react";

// ASSETS
import {
  Avatar,
  Divider,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

// COMPONENTS
import { AddPost } from "@/components/posts/AddPost";

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
            Dodaj post
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <Grid item xs={12}>
            <Paper sx={{ padding: "20px" }}>
              <AddPost />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
