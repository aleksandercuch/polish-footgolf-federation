// CORE
'use client';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Register } from '@/components/auth/register-form/register-form';
import { PageHeader } from '@/components/reusable/page-title/page-title';



interface pageProps {}

const page: FC<pageProps> =({}) => {
    const { t } = useTranslation();
    
    return (
       <>
            <PageHeader header={t("AUTH.registration")} />
            <Register />
        </>
    )
}

export default page;