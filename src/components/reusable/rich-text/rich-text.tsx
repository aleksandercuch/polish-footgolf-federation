// CORE
import { ContentState, EditorState, Modifier, convertFromHTML } from "draft-js";
import { FC, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import dynamic from "next/dynamic";

// UTILS
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
  )
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';

// ASSETS
import classes from './rich-text.module.scss'

interface statueProps {
    content: string;
    updateState: (content: any) => void
}

export const RichText: FC<statueProps> = (props) => {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const { t } = useTranslation();
    
    const handleClick = () => {
        const html = convertToHTML(editorState.getCurrentContent());
        props.updateState({content: html});
    }

    useEffect(() => {
        if (props.content) {
            const blocksFromHTML = convertFromHTML(props.content);
            const state = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap,
            );
            const newEditorState = EditorState.createWithContent(state);
            setEditorState(newEditorState);
        }
     }, [props]);

    return (
        <div>
            <Editor
                editorState={editorState}
                toolbarClassName={classes.wrapper__toolbar}
                wrapperClassName={classes.wrapper}
                editorClassName={classes.wrapper__editor}
                onEditorStateChange={setEditorState}
            />
            <button className={classes.wrapper__editButton} onClick={handleClick}>{t("STATUE.edit")}</button>
        </div>  
    )
}