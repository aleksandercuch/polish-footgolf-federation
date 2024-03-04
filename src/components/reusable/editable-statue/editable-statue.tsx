// CORE
'use client';
import { FC, useEffect, useState } from 'react';

// COMPONENTS
import { RichText } from '@/components/reusable/rich-text/rich-text';
import { Statue } from '@/components/reusable/statue/polish-fields/statue';

// ASSETS
import classes from './editable-statue.module.scss'

// API
import { DocumentData, DocumentReference, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config/clientApp';

// TYPES
import { statueProps } from '@/components/types/statue-types/statue-types';

export interface EditableStatueProps {
    data: void | DocumentData;
    collection: string;
    statueId: string;
}

const EditableStatue: FC<EditableStatueProps> = (props) => {
    const [htmlStatue, setHtmlStatue] = useState<DocumentData>(props.data!);
    const docRef = doc(db, props.collection, props.statueId);

    const updateStatue = (updateObject: statueProps): void => {
        updateDoc(docRef, {content: updateObject.content}).then(() => {
            console.log("succssefully updated!");
        }).catch((error: any) => {
            console.log(error)
        });
    }

    const handleUpdateState = (updateObject: statueProps) => {
        setHtmlStatue(updateObject);
        updateStatue(updateObject)
    }

    return (
        <div className={classes.wrapper}>
            <RichText content={htmlStatue.content} updateState={handleUpdateState}/>
            <Statue content={htmlStatue.content} />
        </div>
    )
}

export default EditableStatue;