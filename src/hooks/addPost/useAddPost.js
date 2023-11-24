import {useRef, useState} from "react";

const useAddPost = () => {
    const fileInputRef = useRef(null);
    const [recurs, setRecurs] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handlePhotoUser = (e) => {
        const file = e.target.files[0]
        console.log(recurs)
        if (file) {
            setRecurs(file);
            if (file) {
                const photoUrl = URL.createObjectURL(file);
                setImageUrl(photoUrl);
            }
        }
    }
    const openFileDialog = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleSendPost = (data) => {
        console.log(data)
    }

    return {
        handleSendPost,
        openFileDialog,
        handlePhotoUser,
        imageUrl,
        fileInputRef
    }
}

export {useAddPost}
