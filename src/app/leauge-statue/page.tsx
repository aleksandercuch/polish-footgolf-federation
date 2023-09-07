// CORE
import { use } from "react";

// COMPONENTS
import EditableStatue from '@/components/reusable/editable-statue/editable-statue';

//API
import { doc } from 'firebase/firestore';
import { db } from '../../../firebase/config/clientApp';

// FUNCTIONS
import { getData } from "@/functions/get-data";

// CONSTANTS
import { COLLECTIONS } from "@/utils/constants/collections-enums";

const page = () => {
    const collection = COLLECTIONS.statuses;
    const statueId = "leauge";
    const docRef = doc(db, collection, statueId);
    const data = use(getData(docRef));

    return (
        <>
            <EditableStatue data={data} collection={collection} statueId={statueId}/>
        </>  
    )
}



export default page;