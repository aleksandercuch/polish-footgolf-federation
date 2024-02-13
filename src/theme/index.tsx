"use client";
import { PaletteColorOptions, Theme, createTheme } from "@mui/material";
import MuiLink from "./MuiLink";

declare module "@mui/material/styles" {
  interface Palette {
    selected?: PaletteColorOptions;
  }
  interface PaletteOptions {
    selected?: PaletteColorOptions;
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#4794d4",
      light: "#4396ca",
      dark: "#06063a",
    },
    secondary: {
      main: "#5a9628",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1440,
    },
  },
  spacing: 5,
  components: {
    MuiLink,
  },
});

export default theme;
