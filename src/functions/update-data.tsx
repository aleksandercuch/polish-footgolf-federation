// API
import { updateDoc } from "firebase/firestore";

export const updateData = async(updateObject: any, docRef: any) => {
    updateDoc(docRef, {content: updateObject.content}).then(() => {
        console.log("succssefully updated!");
    }).catch((error: any) => {
        console.log(error)
    });
}