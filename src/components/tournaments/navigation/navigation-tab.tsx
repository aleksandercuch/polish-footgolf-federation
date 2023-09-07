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
}

export const NavigationTab: FC<pageProps> = ({id, title, defaultChecked}) => {
    const { t } = useTranslation();

    return (
        <>
            <input type="radio" name="css-tabs" id={id} defaultChecked={defaultChecked} className={classes.tabSwitch} />
            <label htmlFor={id} className={classes.tabLabel}>{t(title)}</label>
            <div className={classes.tabContent}>My father had a small estate in Nottinghamshire: I was the third of five sons. He sent me to Emanuel College in Cambridge at fourteen years old, where I resided three years, and applied myself close to my studies; but the charge of maintaining me, although I had a very scanty allowance, being too great for a narrow fortune, I was bound apprentice to Mr. James Bates, an eminent surgeon in London, with whom I continued four years. </div>
        </>
    )
}