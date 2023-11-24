import { addDoc, collection } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebaseConfig";
export const addCommentToDB = async (comment) => {
    try {
        await addDoc(collection(firebaseDB, "comments"), comment);
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}