// CORE
"use client"
import { FC, useState } from 'react';
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
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from 'draft-convert';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
    { ssr: false }
  )

// API
import { addDoc, collection } from 'firebase/firestore';
import auth, { db } from '../../../../firebase/config/clientApp';


interface pageProps {}

export const InitGame: FC<pageProps> =({}) => {
    const { t } = useTranslation();
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const tournamentPlace = [
        {id: 1, name: "Binowo Park Golf Club"},
        {id: 2, name: "Postołowo"}
    ];

    const padTo2Digits = (num: number) => {
        return num.toString().padStart(2, '0');
    }
      
    const formatDate = (date: Date) => {
        return [
          date.getFullYear(),
          padTo2Digits(date.getMonth() + 1),
          padTo2Digits(date.getDate()),
        ].join('-');
    }

    const formik = useFormik({
        initialValues: {
            tournamentName: "",
            tournamentPlace: "",
            status: "",
            maxPlayers: "",
            start: formatDate(new Date()),
            end: formatDate(new Date()),
            registrationFrom: formatDate(new Date()),
            registrationTill: formatDate(new Date()),
        },
        onSubmit: values => { 
            const test = convertToHTML(editorState.getCurrentContent());
            console.log(test);
            addDoc(collection(db, 'tournaments'),
            {
                name: values.tournamentName,
                creatorEmail: auth.currentUser?.email,
                place: values.tournamentPlace,
                status: values.status,
                maxPlayers: values.maxPlayers,
                start: values.start,
                end: values.end,
                registrationFrom: values.registrationFrom,
                registrationTill: values.registrationTill,
                details: test,
            }).catch((error: any) => {
                console.log(error.code);
            });;
        },
        validationSchema: Yup.object({
            tournamentName: Yup.string().required(t('ERRORS.required')),
            tournamentPlace: Yup.string().required(t('ERRORS.required')),
            status: Yup.string().required(t('ERRORS.required')),
            maxPlayers: Yup.string().required(t('ERRORS.required')),
            start: Yup.string().required(t('ERRORS.required')),
            end: Yup.string().required(t('ERRORS.required')),
            registrationFrom: Yup.string().required(t('ERRORS.required')),
            registrationTill: Yup.string().required(t('ERRORS.required')),
        }),
    });

    return (
        <>
            <div className={classes.wrapper}>
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <div>
                        <h2 aria-hidden="true" className={classes.form__header} >{t('HEADERS.tournamentDetails')}</h2>
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
                                {t('INPUTS.tournamentPlace')}
                            </label>
                            <select 
                                name="tournamentPlace" 
                                className={cn(classes.form__input, formik.touched.status && formik.errors.tournamentPlace && classes["form__input--error"])}
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
                            <Button content={t('HEADERS.createGame')} />
                        </div>
                    </div>
                </form>
            </div> 
        </>
    )
}