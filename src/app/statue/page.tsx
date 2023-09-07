// CORE
import { useTranslation } from 'react-i18next';

//COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';
import { Statue } from '@/components/static/statue/statue';


const page =() => {
    return (
        <>
            <PageHeader header={"NAV.statue"} />
            <Statue />
        </>
    )
}

export default page;