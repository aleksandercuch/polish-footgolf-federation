// CORE
'use client';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';
import EditableStatue from '@/components/reusable/editable-statue/editable-statue';

const page = () => {
    const { t } = useTranslation();
    const collection = "statues";
    const statueId = "polishOpen";

    return (
        <>
            <PageHeader header={t("NAV.regulationsLeauge")} />
            <EditableStatue collection={collection} statueId={statueId} />
        </>  
    )
}

export default page;