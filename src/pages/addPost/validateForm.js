import {errorList} from './constants/optionsValidateForm.js'


const validationFormPost = (errors) => {
    return errorList.map(error => ({
        key: error.key,
        hasError: errors[error.key]?.type === error.type,
        message: errors[error.key]?.message
    }))
}

export {validationFormPost}
