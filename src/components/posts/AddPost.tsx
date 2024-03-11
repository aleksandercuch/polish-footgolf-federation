// CORE
"use client";
import { ComponentType, FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ContentState,
  EditorState,
  RawDraftContentBlock,
  convertFromRaw,
} from "draft-js";
import { UserAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";
import { Editor, EditorProps } from "react-draft-wysiwyg";
// ASSETES
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { MuiFileInput } from "mui-file-input";
import {
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { convertToRaw } from "draft-js";
import { FootballLoader } from "../layout/loader/loader";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

//FIREBASE
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase/config/clientApp";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

interface IProps {
  id?: string;
  title?: string;
  description?: any;
  file?: string;
  date?: Date;
}

interface postParams {
  title: string;
  description: any;
  file: File;
  date: Date;
}
export interface getParams {
  id: string;
  title: string;
  description: any;
  file: string;
  date: Date;
}
export const AddPost = ({ id, title, description, file, date }: IProps) => {
  const [editorState, setEditorState] = useState(
    description
      ? EditorState.createWithContent(convertFromRaw(description))
      : EditorState.createEmpty()
  );
  const currentUser = UserAuth();

  const form = useForm<postParams>({
    defaultValues: {
      title: title || "",
      description: description || "",
      file: undefined,
      date: date || new Date(),
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

    if (id) {
      uploadBytes(storageRef, data.file)
        .then(async (snapshot) => {
          const downloadURL = await getDownloadURL(snapshot.ref);
          updateDoc(doc(db, "posts", id), {
            title: data.title,
            description: data.description,
            file: downloadURL,
            date: data.date,
          }).then(() => {
            alert("Edytowałeś post!");
            reset();
          });
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      uploadBytes(storageRef, data.file)
        .then(async (snapshot) => {
          const downloadURL = await getDownloadURL(snapshot.ref);
          addDoc(collection(db, "posts"), {
            title: data.title,
            description: data.description,
            file: downloadURL,
            date: data.date,
          }).then(() => {
            alert("Dodałeś post!");
            reset();
          });
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const onEditorStateChange = (editorState: EditorState) => {
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
      {file && (
        <>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={5}
            mb={5}
          >
            <Grid item>
              <SportsSoccerIcon />
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                component="h4"
                sx={{ textAlign: "center", padding: "0 10px" }}
              >
                <strong>Obecny obraz</strong>
              </Typography>
            </Grid>
            <Grid item>
              <SportsSoccerIcon />
            </Grid>
            <Grid item xs={12} container justifyContent={"center"}>
              <Grid item xs={3} mt={3} mb={3}>
                <img src={file} alt="error occurs" style={{ width: "100%" }} />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
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
        {id ? <>Edytuj post</> : <>Dodaj post</>}
      </Button>
    </FormControl>
  );
};
