import { collection, addDoc, query, where, getDocs, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
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

export const getPostById = async (idPost) => {
    try {
        const postRef = doc(firebaseDB, "posts", idPost);
        const post = await getDoc(postRef);
        if(post.exists()){
            return {
                id: post.id,
                ...post.data()
            };
        }else{
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const updatePost = async (idPost, updateInfo) => {
    try {
        const postRef = doc(firebaseDB, "posts", idPost);
        const response = await updateDoc(postRef, updateInfo);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export { addPost }