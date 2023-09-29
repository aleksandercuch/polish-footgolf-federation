// CORE
"use client"
import { FC } from "react";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

// COMPONENTS
import { Button } from "@/components/reusable/button/button";

// ASSETS
import classes from './confirmation-modal.module.scss'
import  * as CrossIcon from '@/assets/svg/x-white.svg';

// CONTEXT
import { UserAuth } from "@/context/auth-context";

interface componentProps {
    message: string;
}

export const ConfirmationModal: FC<componentProps> =({message}) => {
    const { t } = useTranslation();
    const { handleModal } = UserAuth();

    

    return (
        <div className={classes.modalWrapper}>
            <Image priority src={CrossIcon} alt="test" onClick={() => handleModal("Close Modal")} />
            <div className={classes.gridWrapper}>
                <p>{message}</p>
                <Button content={t("MODAL.confirm")} onClickFunc={() => handleModal("Close Modal")}/>
            </div>
        </ div>
    )
}