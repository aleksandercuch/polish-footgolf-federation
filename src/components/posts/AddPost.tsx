// CORE
"use client";
import { ComponentType, FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { EditorState } from "draft-js";
import { UserAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
// ASSETES
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { MuiFileInput } from "mui-file-input";
import { Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import { convertToRaw } from "draft-js";
import { FootballLoader } from "../layout/loader/loader";

//FIREBASE
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase/config/clientApp";
import { collection, addDoc } from "firebase/firestore";

interface Props {
  Component: () => JSX.Element;
}

interface postParams {
  title: string;
  description: string;
  file: File;
  date: Date;
}

export const AddPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const currentUser = UserAuth();
  const Editor = dynamic<EditorProps>(
    async () => {
      const mod = await import("react-draft-wysiwyg");
      return { default: mod.Editor as unknown as ComponentType<EditorProps> };
    },
    { ssr: false }
  );
  const form = useForm<postParams>({
    defaultValues: {
      title: "",
      description: "",
      file: undefined,
      date: new Date(),
    },
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid, isSubmitted },
  } = form;

  const submitForm = (data: postParams) => {
    const storageRef = ref(storage, `postsImages/${data.file.name}`);

    uploadBytes(storageRef, data.file)
      .then((snapshot) => {
        addDoc(collection(db, "posts"), {
          title: data.title,
          description: data.description,
          file: `gs://${snapshot.metadata.bucket}/postsImages/${data.file.name}`,
          date: data.date,
        }).then(() => {
          alert("Dodałeś post!");
          reset();
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onEditorStateChange = function (editorState: EditorState) {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    /*let text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, "");*/
    let text = editorState.getCurrentContent().getPlainText("\u0001");
  };

  useEffect(() => {
    // !currentUser?.user && redirect("/");
  }, [currentUser?.user]);

  return (
    <Grid item xs={12}>
      {/* {isSubmitting && <FootballLoader />} */}
      <Paper sx={{ padding: "20px" }}>
        <FormControl
          component={"form"}
          onSubmit={handleSubmit(submitForm)}
          disabled={isSubmitting}
        >
          <Controller
            name={"title"}
            control={control}
            rules={{
              required: "Podaj tytuł!",
            }}
            render={({ field }) => (
              <TextField
                label="Tytuł posta"
                variant="outlined"
                autoComplete="username"
                size="small"
                type="text"
                error={Boolean(errors[field.name])}
                helperText={errors[field.name]?.message}
                fullWidth
                sx={{ mb: 3 }}
                {...field}
              />
            )}
          />

          <Controller
            name={"file"}
            control={control}
            rules={{
              required: "Wybierz plik!",
            }}
            render={({ field }) => (
              <MuiFileInput inputProps={{ accept: ".png, .jpeg" }} {...field} />
            )}
          />

          <Controller
            name={"description"}
            control={control}
            rules={{
              required: "Podaj tytuł!",
            }}
            render={({ field }) => (
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
                {...field}
              />
            )}
          />

          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{ mb: 5 }}
            disabled={isSubmitting}
          >
            Dodaj post
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};
