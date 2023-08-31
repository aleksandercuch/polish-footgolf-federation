// CORE
import { FC } from 'react';
import classes from './page.module.scss'
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';

interface pageProps {}

const page: FC<pageProps> =({}) => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader header={t("NAV.contact")} />
            <div className={classes.wrapper}>

            </div>
        </>  
    )
}

export default page;