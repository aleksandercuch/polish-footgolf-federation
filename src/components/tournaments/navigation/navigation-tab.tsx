// CORE
"use client"
import { FC } from "react"
import { useTranslation } from 'react-i18next';

// ASSETS
import classes from './navigation.module.scss'

interface pageProps {
    id: string;
    title: string;
    defaultChecked?: boolean;
    children: any;
}

export const NavigationTab: FC<pageProps> = ({id, title, defaultChecked, children}) => {
    const { t } = useTranslation();

    return (
        <>
            <input type="radio" name="css-tabs" id={id} defaultChecked={defaultChecked} className={classes.tabSwitch} />
            <label htmlFor={id} className={classes.tabLabel}>{t(title)}</label>
            <div className={classes.tabContent}>{children}</div>
        </>
    )
}