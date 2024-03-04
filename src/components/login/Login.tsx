// CORE
"use client";
import { FC, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { UserAuth } from "@/context/auth-context";

// ASSETES
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { MuiFileInput } from "mui-file-input";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { convertToRaw } from "draft-js";

//FIREBASE
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../../firebase/config/clientApp";
import { EMAIL_PATTERN } from "@/utils/constants/constants";

interface LoginParams {
  email: string;
  password: string;
}

export const Login = () => {
  const currentUser = UserAuth();

  const form = useForm<LoginParams>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid, isSubmitted },
  } = form;

  const submitForm = async (data: LoginParams) => {
    currentUser?.signIn(data.email, data.password).catch((error: any) => {
      console.log(error);
    });
  };

  const handleLogout = async () => {
    currentUser!.logout().catch((error: any) => {
      console.log(error);
    });
  };

  return (
    <Grid item xs={2}>
      <Paper sx={{ padding: "20px" }}>
        {currentUser?.user?.email ? (
          <>
            <Button
              type="submit"
              variant="outlined"
              onClick={handleLogout}
              fullWidth
            >
              Wyloguj
            </Button>
          </>
        ) : (
          <FormControl component={"form"} onSubmit={handleSubmit(submitForm)}>
            <Controller
              name={"email"}
              control={control}
              rules={{
                required: "Email jest potrzebny!",
                pattern: {
                  value: EMAIL_PATTERN,
                  message: "Zły format!",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="e-mail"
                  variant="outlined"
                  size="small"
                  type="email"
                  error={Boolean(errors[field.name])}
                  helperText={errors[field.name]?.message}
                  fullWidth
                  sx={{ mb: 3 }}
                  {...field}
                />
              )}
            />
            <Controller
              name={"password"}
              control={control}
              rules={{
                required: "Wprowadź hasło!",
              }}
              render={({ field }) => (
                <TextField
                  label="password"
                  type={"password"}
                  variant="outlined"
                  size="small"
                  error={Boolean(errors[field.name])}
                  helperText={errors[field.name]?.message}
                  fullWidth
                  {...field}
                />
              )}
            />
            <Button type="submit" variant="outlined" sx={{ marginTop: "20px" }}>
              Zaloguj
            </Button>
          </FormControl>
        )}
      </Paper>
    </Grid>
  );
};
