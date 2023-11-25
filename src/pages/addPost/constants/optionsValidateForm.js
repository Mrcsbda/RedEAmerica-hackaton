const optionsFormValidate = {
    optTittle :{required: '* Debes ingresar un titulo'},
    optContent: {required: '* Debes ingresa el contenido' },
    optTypeFormat: {required: '* Debes ingresar algun tipo de formato del post' },
    optCategory: {required: '* Debes ingresar la categoria del post' },
}

const errorList = [
    {key: 'title', type: 'required'},
    {key: 'content', type: 'required'},
    {key: 'typeFormat', type: 'required'},
    {key: 'category', type: 'required'},
]



export {optionsFormValidate, errorList}
