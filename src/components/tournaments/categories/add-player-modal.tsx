// CORE
"use client"
import { FC } from "react";
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';

// COMPONENTS
import { Button } from "@/components/reusable/button/button";
import { ConfirmationModal } from "@/components/reusable/confirmation-modal/confirmation-modal";

// ASSETS
import classes from './categories.module.scss'
import cn from "classnames";
import  * as CrossIcon from '@/assets/svg/x-white.svg';

// CONTEXT
import { UserAuth } from "@/context/auth-context";

// TYPES
import { Itournaments } from "@/components/types/tournaments-types/tournament-types";

// CONSTANTS
import { COLLECTIONS } from "@/utils/constants/collections-enums";

// API
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config/clientApp";

interface componentProps {
    tournament: any;
    tournamentId: string;
    category?: any;
}

export const AddPlayerModal: FC<componentProps> =({tournament, tournamentId, category}) => {
    const { t } = useTranslation();
    const { handleModal } = UserAuth();

    const createId = (): string => {
        let s=''
        for (s; s.length < 20; s += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.charAt(Math.random()*62|0));
        return s;
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            birthday: ""
        },
        onSubmit: values => { 
            const tournamentToUpdate: Itournaments = tournament;
            const index = tournament.categories.indexOf(category);
                
            tournamentToUpdate.categories[index].players.push({
            id: createId(),
            firstName: values.firstName,
            lastName: values.lastName,
            birthday: values.birthday,
            paid: false,
            confirmed: false
            });
                        
            const docRef = doc(db, COLLECTIONS.tournaments, tournamentId);
            updateDoc(
            docRef, 
            {
                categories: tournamentToUpdate.categories
            })
            .then(() => {
                handleModal(
                    <ConfirmationModal message={t("MODAL.assignedUser")}/>
                );
            })
            .catch((error: any) => {
                console.log(error)
            });;
        },
    });

    return (
        <div className={cn(classes.modalWrapper, classes.addPlayerWrapper)}>
            <Image priority src={CrossIcon} alt="test" onClick={() => handleModal("Close Modal")} />
            <form className={classes.form} onSubmit={formik.handleSubmit}>
                <div>
                    <h2 aria-hidden="true" className={classes.form__header} >{t('HEADERS.playerData')}</h2>
                    <hr />
                    <div className={classes.form__table}>
                        <label>
                            {formik.touched.firstName && formik.errors.firstName && (<div className={classes.form__errorSign}>*</div>)}
                            {t('AUTH.firstName')}
                        </label>
                        <input 
                            name="firstName" 
                            className={cn(classes.form__input, formik.touched.firstName && formik.errors.firstName && classes["form__input--error"])} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName} 
                        />
                        <label>
                            {formik.touched.lastName && formik.errors.lastName && (<div className={classes.form__errorSign}>*</div>)}
                            {t('AUTH.lastName')}
                        </label>
                        <input 
                            name="lastName" 
                            className={cn(classes.form__input, formik.touched.lastName && formik.errors.lastName && classes["form__input--error"])} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName} 
                        />
                        <label>
                            {formik.touched.birthday && formik.errors.birthday && (<div className={classes.form__errorSign}>*</div>)}
                            {t('INPUTS.birthday')}
                        </label>
                        <input 
                            type="date" 
                            name="birthday" 
                            className={cn(classes.form__input, formik.touched.birthday && formik.errors.birthday && classes["form__input--error"])} 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.birthday} 
                        />
                    </div>
                </div>
                <div className={classes.form__buttonContainer}>
                    <Button content={t("BUTTONS.addPlayerShort")} />
                </div>
            </form>
        </ div>
    )
}