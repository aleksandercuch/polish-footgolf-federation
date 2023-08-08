'use client';

// CORE
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// ASSETS
import classes from './page.module.scss'

//COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';

interface pageProps {}

const page: FC<pageProps> =({}) => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader header={t("NAV.statue")} />
            <div className={classes.wrappper}>
                <div className={classes.wrapper__image}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/Statue%2Fcertificate.png?alt=media&token=610d2ff2-73ac-4aaa-9113-877196523f22" alt="Database Error" />
                </div>
                <div className={classes.wrapper__statue}>
                    <h2>Pobierz Statut</h2>
                    <button>Ściągnij</button>
                </div>
            </div>
        </>
    )
}

export default page;