// CORE
"use client";
import React, { useEffect, useState } from "react";
import { FC } from "react";

// COMPONENTS
import DisplayPost from "@/components/posts/DisplayPost";

// ASSETS
import { Avatar, Divider, Grid, Paper, Typography } from "@mui/material";

// FIREBASE
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export interface pageProps {
  params: {
    id: string;
  };
}

export interface postParams {
  id: string;
  title: string;
  description: any;
  file: string;
  date: Date;
}

const page: FC<pageProps> = ({ params }) => {
  return (
    <>
      <DisplayPost params={params} />
    </>
  );
};

export default page;
