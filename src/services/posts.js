import {collection, addDoc} from 'firebase/firestore';
import {firebaseDB} from '../firebase/firebaseConfig.js';
import Swal from "sweetalert2";

const addPost = async(postData) => {
    try {
        const response =await addDoc(collection(firebaseDB, 'posts'),postData );
        if (response){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Creado exitosamente",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }catch (e) {
        console.error(e);
        Swal.fire(
            "Oops!",
            e,
            "error"
        );
    }
}

export {addPost}

