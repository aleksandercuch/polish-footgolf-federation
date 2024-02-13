"use client";
import { Theme } from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

const MuiLink: OverridesStyleRules = {
  defaultProp: {},
  styleOverrides: {
    root: () => ({
      fontSize: "14px",
    }),
  },
  variants: [
    {
      props: { variant: "button" },
      style: ({ theme }: { theme: Theme }) => ({
        borderRadius: "5px",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: "10px 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",

        "&:hover": {
          backgroundColor: theme.palette.secondary.main,
          textDecoration: "none",
        },
      }),
    },
  ],
};

export default MuiLink;
