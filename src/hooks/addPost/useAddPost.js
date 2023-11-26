import {useRef, useState} from "react";
import fileUpload from "../../services/fileUpload.js";
import {addPost} from "../../services/posts.js";
import Swal from "sweetalert2";

const useAddPost = (idUser, reset) => {
    const fileInputRef = useRef(null);
    const fileImagePost = useRef(null);
    const [loading, setLoading] = useState(false)
    const [recurs, setRecurs] = useState(null);
    const [postImage, setPostImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [imagePost, setImagePost] = useState(null)

    const handleRecurUser = (e) => {
        const file = e.target.files[0]
        if (file) {
            setRecurs(file);
            if (file) {
                const photoUrl = URL.createObjectURL(file);
                setImageUrl(photoUrl);
            }
        }
    }
    const handleImagePost = (e) => {
        const file = e.target.files[0]
        if (file) {
            setPostImage(file)
            if (file) {
                const photoUrl = URL.createObjectURL(file);
                setImagePost(photoUrl);
            }
        }
    }
    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const openFileImagePost = () => {
        if (fileImagePost.current) {
            fileImagePost.current.click();
        }
    }

    const handleSendPost = async (data) => {
        setLoading(true)
        if (!recurs || !postImage) {
            Swal.fire(
                "Oops!",
                "Debes ingresar los recursos",
                "error"
            );
            setLoading(false)
        } else {
            let urlRecurs = null
            const formatRecurs = recurs.type.split('/');
            const imagePost = await fileUpload(postImage, 'image');

            if (formatRecurs[0] === 'application') {
                urlRecurs = await fileUpload(recurs, 'raw');
            } else {
                urlRecurs = await fileUpload(recurs, formatRecurs[0]);
            }
            const newPost = {
                ...data,
                userId: idUser,
                imagePost: imagePost,
                recurs: urlRecurs
            }
            await addPost(newPost)
            reset()
            setImageUrl(null)
            setImagePost(null);
            setLoading(false)

        }

    }

    return {
        handleSendPost,
        openFileDialog,
        handleRecurUser,
        handleImagePost,
        openFileImagePost,
        fileImagePost,
        imageUrl,
        fileInputRef,
        imagePost,
        loading
    }
}

export {useAddPost}
