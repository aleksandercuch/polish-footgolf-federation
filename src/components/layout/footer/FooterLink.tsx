"use client";

import { Typography } from "@mui/material";
// CORE
import Link from "next/link";

interface Iprops {
  url: string;
  name: string;
}
export const FooterLink = ({ url, name }: Iprops) => {
  return (
    <Link
      href={url}
      style={{
        textDecoration: "none",
        height: "60px",
        display: "inline-grid",
        alignContent: "center",
        width: "100%",
        color: "#005A9C",
        textAlign: "center",
      }}
    >
      <Typography variant="subtitle1">{name}</Typography>
    </Link>
  );
};
