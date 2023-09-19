// CORE
"use client"
import { FC, useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from "classnames";
import dynamic from 'next/dynamic';

// ASSETS
import classes from './init-game.module.scss'

// COMPONENTS
import { Button } from '@/components/reusable/button/button';

// CONSTANTS
import { gameStatuses } from '@/utils/constants/game-statuses';

// UTILS
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';

// TYPES
import { IEditTournaments } from '@/components/types/tournaments-types/tournament-types';

const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
  )

// API
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import auth, { db } from '../../../../firebase/config/clientApp';

// CONTEXT
import { UserAuth } from '@/context/auth-context';

// FUNCTIONS
import { formatDate } from '@/functions/format-date';

export const InitGame: FC<IEditTournaments> =({tournaments, onClickFunc, tournamentId}) => {
    const { t } = useTranslation();
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const { handleModal } = UserAuth();
    
    const tournamentPlace = [
        {id: 1, name: "Binowo Park Golf Club"},
        {id: 2, name: "Postołowo"}
    ];

    const types = [
        {id: 1, name: "private"},
        {id: 2, name: "public"}
    ]

    const formik = useFormik({
        initialValues: {
            tournamentName: tournaments ? tournaments.name : "",
            tournamentPlace: tournaments ? tournaments.place : "",
            type: tournaments ? tournaments.type : "",
            status: tournaments ? tournaments.status : "",
            maxPlayers: tournaments ? tournaments.maxPlayers : "",
            start: tournaments ? tournaments.start : formatDate(new Date()),
            end: tournaments ? tournaments.end : formatDate(new Date()),
            registrationFrom: tournaments ? tournaments.registrationFrom : formatDate(new Date()),
            registrationTill: tournaments ? tournaments.registrationTill : formatDate(new Date()),
        },
        onSubmit: values => { 
            const detais = convertToHTML(editorState.getCurrentContent());
            if (editorState) {
                const editRef = doc(db, "tournaments", tournamentId!);
                updateDoc(editRef,
                {
                    name: values.tournamentName,
                    creatorEmail: auth.currentUser?.email,
                    type: values.type,
                    place: values.tournamentPlace,
                    status: values.status,
                    maxPlayers: values.maxPlayers,
                    start: values.start,
                    end: values.end,
                    registrationFrom: values.registrationFrom,
                    registrationTill: values.registrationTill,
                    details: detais,
                }).then((response) => {
                    console.log(response);
                }).catch((error: any) => {
                    console.log(error.code);
                });;
            } else {
                addDoc(collection(db, 'tournaments'),
                {
                    name: values.tournamentName,
                    creatorEmail: auth.currentUser?.email,
                    type: values.type,
                    place: values.tournamentPlace,
                    status: values.status,
                    maxPlayers: values.maxPlayers,
                    start: values.start,
                    end: values.end,
                    registrationFrom: values.registrationFrom,
                    registrationTill: values.registrationTill,
                    details: detais,
                }).catch((error: any) => {
                    console.log(error.code);
                });;
            }
        },
        validationSchema: Yup.object({
            tournamentName: Yup.string().required(t('ERRORS.required')),
            tournamentPlace: Yup.string().required(t('ERRORS.required')),
            type: Yup.string().required(t('ERRORS.required')),
            status: Yup.string().required(t('ERRORS.required')),
            maxPlayers: Yup.string().required(t('ERRORS.required')),
            start: Yup.string().required(t('ERRORS.required')),
            end: Yup.string().required(t('ERRORS.required')),
            registrationFrom: Yup.string().required(t('ERRORS.required')),
            registrationTill: Yup.string().required(t('ERRORS.required')),
        }),
    });

    useEffect(() => {
        if (tournaments) {
            const blocksFromHTML = convertFromHTML(tournaments.details);
            const state = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap,
            );
            const newEditorState = EditorState.createWithContent(state);
            setEditorState(newEditorState);
        }
     }, [tournaments]);

    return (
        <>
            <div className={cn(classes.wrapper, tournaments && classes.modalWrapper)}>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <div>
                        <h2 aria-hidden="true" className={classes.form__header} >{t('HEADERS.default')}</h2>
                        <hr />
                        <div className={classes.form__table}>
                            <label>
                                {formik.touched.tournamentName && formik.errors.tournamentName && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.tournamentName')}
                            </label>
                            <input 
                                type="tournamentName" 
                                name="tournamentName" 
                                className={cn(classes.form__input, formik.touched.tournamentName && formik.errors.tournamentName && classes["form__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.tournamentName} 
                            />
                            <label>
                                {formik.touched.tournamentPlace && formik.errors.tournamentPlace && (<div className={classes.form__errorSign}>*</div>)}
                                {t('LABELS.type')}
                            </label>
                            <select 
                                name="type" 
                                className={cn(classes.form__input, formik.touched.type && formik.errors.type && classes["form__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.type} >
                                <option>{`--${t("INPUTS.choose")}--`}</option>
                                {types.map((type) => {
                                    return (<option key={type.id} value={type.name}>{t("INPUTS." + type.name)}</option>)
                                })}
                            </select>
                            <label>
                                {formik.touched.tournamentPlace && formik.errors.tournamentPlace && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.tournamentPlace')}
                            </label>
                            <select 
                                name="tournamentPlace" 
                                className={cn(classes.form__input, formik.touched.tournamentPlace && formik.errors.tournamentPlace && classes["form__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.tournamentPlace} >
                                <option>{`--${t("INPUTS.choose")}--`}</option>
                                {tournamentPlace.map((place) => {
                                    return (<option key={place.id} value={place.name}>{place.name}</option>)
                                })}
                            </select>
                            <label>
                                {formik.touched.status && formik.errors.status && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.status')}
                            </label>
                            <select 
                                name="status" 
                                className={cn(classes.form__input, formik.touched.status && formik.errors.status && classes["form__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.status} >
                                <option>{`--${t("INPUTS.choose")}--`}</option>
                                {gameStatuses && gameStatuses.map((game) => {
                                    return (<option key={game.id} value={game.status}>{`${t("INPUTS." + game.status)}`}</option>)
                                })}
                            </select>
                            <label>
                                {formik.touched.maxPlayers && formik.errors.maxPlayers && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.maxPlayers')}
                            </label>
                            <input 
                                type="maxPlayers" 
                                name="maxPlayers" 
                                className={cn(classes.form__input, formik.touched.maxPlayers && formik.errors.maxPlayers && classes["form__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.maxPlayers} 
                            />
                        </div>
                    </div>
                    <div>
                        <h2 aria-hidden="true" className={classes.form__header} >{t('INPUTS.organisation')}</h2>
                        <hr />
                        <div className={classes.form__table}>
                            <label>
                                {formik.touched.start && formik.errors.start && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.start')}
                            </label>
                            <input 
                                type="date" 
                                onChange={formik.handleChange} 
                                className={cn(classes.form__input, formik.touched.start && formik.errors.start && classes["form__input--error"])} 
                                name="start" 
                                value={formik.values.start}
                                min={formatDate(new Date())} 
                            />
                             <label>
                                {formik.touched.end && formik.errors.end && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.end')}
                            </label>
                            <input 
                                type="date"
                                onChange={formik.handleChange} 
                                className={cn(classes.form__input, formik.touched.maxPlayers && formik.errors.maxPlayers && classes["form__input--error"])} 
                                name="end" 
                                value={formik.values.end}
                                min={formatDate(new Date())} 

                            />
                             <label>
                                {formik.touched.registrationFrom && formik.errors.registrationFrom && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.registrationFrom')}
                            </label>
                            <input 
                                type="date" 
                                onChange={formik.handleChange} 
                                className={cn(classes.form__input, formik.touched.maxPlayers && formik.errors.maxPlayers && classes["form__input--error"])} 
                                name="registrationFrom" 
                                value={formik.values.registrationFrom}
                                min={formatDate(new Date())} 

                            />
                             <label>
                                {formik.touched.registrationTill && formik.errors.registrationTill && (<div className={classes.form__errorSign}>*</div>)}
                                {t('INPUTS.registrationTill')}
                            </label>
                            <input 
                                type="date" 
                                onChange={formik.handleChange} 
                                className={cn(classes.form__input, formik.touched.maxPlayers && formik.errors.maxPlayers && classes["form__input--error"])} 
                                name="registrationTill" 
                                value={formik.values.registrationTill}
                                min={formatDate(new Date())} 

                            />
                        </div>
                    </div>
                    <div className={classes.form__gridRow}>
                        <h2 aria-hidden="true" className={classes.form__header} >{t('INPUTS.details')}</h2>
                        <hr />
                        <div className={classes.form__rowInfo}>
                        <Editor
                            editorState={editorState}
                            toolbarClassName={classes.form__toolbar}
                            wrapperClassName={classes.form__wrapper}
                            editorClassName={classes.form__editor}
                            onEditorStateChange={setEditorState}
                        />
                        </div>
                        <div className={classes.form__buttonContainer}>
                            {tournaments ? (
                                <>
                                    <Button content={t("STATUE.edit")} />
                                    <button className={classes.cancel} type="button"  onClick={() => handleModal("This is component modal content")}>{t('INPUTS.cancel')}</button>
                                </>
                            ) : (
                                <Button content={t('HEADERS.createGame')} />
                            )}
                        </div>
                    </div>
                </form>
            </div> 
        </>
    )
}