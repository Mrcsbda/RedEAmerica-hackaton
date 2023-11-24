import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
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

export const getComments = async (id) => {
    try {
        const commentsRef = collection(firebaseDB, "comments");
        const queryComments = await query(commentsRef, where("postId", "==", id))
        const dataComments = await getDocs(queryComments);
        let comments = []
        dataComments?.forEach((doc) => {
            comments.push({
                id: doc.id,
                ...doc.data()
            });
        })
        return comments
    } catch (error) {
        console.log(error);
        return error
    }
}