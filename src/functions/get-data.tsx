// API
import { DocumentData, DocumentReference, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config/clientApp";

export const  getData = async(docRef: DocumentReference<DocumentData>) => {
    return getDoc(docRef).then(result => {
        return result.data();
    }).catch((error: any) => {
        console.log(error)
    });
  }