"use client";
// CORE
import Link from "next/link";

// ASSETS
import theme from "@/theme";

interface Props {
  route: string;
  text: string;
}

export const NavLink = ({ route, text }: Props) => {
  return (
    <Link
      href={route}
      style={{
        textDecoration: "none",
        color: theme.palette.common.white,
        height: "60px",
        display: "inline-grid",
        alignContent: "center",
        width: "100%",
      }}
    >
      {text}
    </Link>
  );
};
