import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { firebaseDB } from '../firebase/firebaseConfig.js';
import Swal from "sweetalert2";

const addPost = async (postData) => {
    try {
        const response = await addDoc(collection(firebaseDB, 'posts'), postData);
        if (response) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Creado exitosamente",
                showConfirmButton: false,
                timer: 1500
            });
        }
    } catch (e) {
        console.error(e);
        Swal.fire(
            "Oops!",
            e,
            "error"
        );
    }
}

export const getPosts = async (id) => {
    try {
        const postsRef = collection(firebaseDB, "posts");
        const queryPosts = await query(postsRef, where("userId", "==", id))
        const dataPosts = await getDocs(queryPosts);
        let posts = []
        dataPosts?.forEach((doc) => {
            posts.push({
                id: doc.id,
                ...doc.data()
            });
        })
        return posts
    } catch (error) {
        console.log(error);
        return error
    }
}
export const deletePostsDB = async (id) => {
    try {
        await deleteDoc(doc(firebaseDB, `posts/${id}`));
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const getAllPosts = async () => {
    try {
        const postsRef = collection(firebaseDB, 'posts');
        const querySnapshot = await getDocs(postsRef);

        const posts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return posts;
    } catch (error) {
        console.error('Error fetching all posts:', error);
        throw error;
    }
};

export { addPost }