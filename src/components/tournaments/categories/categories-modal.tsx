// CORE
"use client"
import { FC, useMemo } from "react";
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';

// COMPONENTS
import { Button } from "@/components/reusable/button/button";

// ASSETS
import classes from './categories.module.scss'
import cn from "classnames";
import  * as CrossIcon from '@/assets/svg/x-white.svg';

// CONTEXT
import { UserAuth } from "@/context/auth-context";

// FUNCTIONS
import { formatDate } from "@/functions/format-date";

// API
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { firebase, db } from "../../../../firebase/config/clientApp";
import { COLLECTIONS } from "@/utils/constants/collections-enums";

interface componentProps {
    tournament: any;
    tournamentId: string;
    category?: any;
}

export const CategoriesModal: FC<componentProps> =({tournament, tournamentId, category}) => {
    const { t } = useTranslation();
    const { handleModal } = UserAuth();

    const formik = useFormik({
        initialValues: {
            name: category ? category.name : '',
            maxPlayers: category ? category.maxPlayers : '',
            roudsCount: category ? category.roudsCount : '',
            start: category ? category.start : formatDate(new Date()),
            end: category ? category.end : formatDate(new Date()),
        },
        onSubmit: values => { 
            const docRef = doc(db, COLLECTIONS.tournaments, tournamentId);
            if(category) {
                const index = tournament.categories.indexOf(category);
                let categoriesToUpdate = tournament.categories;
                categoriesToUpdate[index] = {
                    ...category,
                    name: values.name,
                    maxPlayers: values.maxPlayers,
                    start: values.start,
                    end: values.end,
                };
                updateDoc(
                    docRef, 
                    {
                        categories: categoriesToUpdate
                    }).then(() => {
                        handleModal("Modified a category!");
                }).catch((error: any) => {
                    console.log(error)
                });
            } else {
                updateDoc(
                    docRef, 
                    {
                        categories: [
                            ...tournament.categories,
                            {
                                id: tournament.categories.length + 1,
                                name: values.name,
                                maxPlayers: values.maxPlayers,
                                start: values.start,
                                end: values.end,
                                players: []
                            }
                        ]
                    }).then(() => {
                        handleModal("Created a category!");
                }).catch((error: any) => {
                    console.log(error)
                });
            }
        },
    });

    return (
        <div className={classes.modalWrapper}>
            <Image priority src={CrossIcon} alt="test" onClick={() => handleModal("Close Modal")} />
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div>
                    <h2 aria-hidden="true" className={classes.form__header} >{t('HEADERS.default')}</h2>
                    <hr />
                    <div className={classes.form__table}>
                        <label>
                            {formik.touched.name && formik.errors.name && (<div className={classes.form__errorSign}>*</div>)}
                            {t('LABELS.name')}
                        </label>
                        <input 
                            type="name" 
                            name="name" 
                            className={cn(classes.form__input, formik.touched.name && formik.errors.name && classes["form__input--error"])} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.name} 
                        />
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
                            name="start" 
                            className={cn(classes.form__input, formik.touched.start && formik.errors.start && classes["form__input--error"])} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.start} 
                        />
                        <label>
                            {formik.touched.end && formik.errors.end && (<div className={classes.form__errorSign}>*</div>)}
                            {t('INPUTS.end')}
                        </label>
                        <input 
                            type="date" 
                            name="end" 
                            className={cn(classes.form__input, formik.touched.end && formik.errors.end && classes["form__input--error"])} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.end} 
                        />
                    </div>
                </div>
                <div className={classes.form__buttonContainer}>
                    <Button content={category ? t("STATUE.edit") : t('LABELS.createCategory')} />
                </div>
            </form>
        </ div>
    )
}