// CORE
'use client';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { RichText } from '@/components/reusable/rich-text/rich-text';
import { Statue } from '@/components/reusable/statue/polish-fields/statue';

// ASSETS
import classes from './editable-statue.module.scss'

// API
import { DocumentData, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config/clientApp';

// TYPES
import { statueProps } from '@/components/types/statue-types/statue-types';

export interface EditableStatueProps {
    collection: string;
    statueId: string;
}

const EditableStatue: FC<EditableStatueProps> = (props) => {
    const docRef = doc(db, props.collection, props.statueId);
    const [htmlStatue, setHtmlStatue] = useState<DocumentData| undefined>({});

    const handleUpdateState = (updateObject: statueProps) => {
        setHtmlStatue(updateObject);
        updateStatue(updateObject);
    }
    
    const getStatue = (): void => {
        getDoc(docRef).then(result => {
            setHtmlStatue(result.data());
        }).catch((error: any) => {
            console.log(error)
        });
    }

    const updateStatue = (updateObject: statueProps): void => {
        updateDoc(docRef, {content: updateObject.content}).then(() => {
            console.log("succssefully updated!");
        }).catch((error: any) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getStatue();
     }, []);

    return (
        <div className={classes.wrapper}>
            {htmlStatue && (
                <>
                    <RichText content={htmlStatue.content} updateState={handleUpdateState}/>
                    <Statue content={htmlStatue.content} />
                </>
            )}
        </div>
    )
}

export default EditableStatue;