"use client"
// CORE
import { useTranslation } from 'react-i18next';


// ASSETS
import classes from './page-title.module.scss';

interface Iprops {
    header: string;
}

export const PageHeader = (props: Iprops) => {
    const { t } = useTranslation();

    return (
        <h1 className={classes.header}>{t(props.header)}</h1>
    )
}