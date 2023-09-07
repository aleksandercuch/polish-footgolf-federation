// CORE
import { use } from 'react';

// COMPONENTS
import EditableStatue from '@/components/reusable/editable-statue/editable-statue';
import { PageHeader } from '@/components/reusable/page-title/page-title';

// API
import { getData } from "@/functions/get-data";
import { db } from '../../../firebase/config/clientApp';

// FUNCTIONS
import { doc } from 'firebase/firestore';

// CONSTANTS
import { COLLECTIONS } from '@/utils/constants/collections-enums';

const page = () => {
    const collection = COLLECTIONS.statuses;
    const statueId = "polishOpen";
    const docRef = doc(db, collection, statueId);
    const data = use(getData(docRef));

    return (
        <>
            <PageHeader header={"NAV.regulationsLeauge"} />
            <EditableStatue data={data} collection={collection} statueId={statueId} />
        </>  
    )
}

export default page;