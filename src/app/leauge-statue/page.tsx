// CORE
import { use } from "react";

// COMPONENTS
import EditableStatue from '@/components/reusable/editable-statue/editable-statue';
import { doc } from 'firebase/firestore';
import { db } from '../../../firebase/config/clientApp';

// FUNCTIONS
import { getData } from "@/functions/get-data";

const page = () => {
    const collection = "statues";
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