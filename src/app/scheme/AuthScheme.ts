import * as Yup from 'yup'
export class AuthSchema {
    static initiateRegister = Yup.object().shape({
        type: Yup.boolean().required("Type Is Required."),
        email: Yup.string().email().required("email Is Required."),
        password: Yup.string().required("password Is Required."),
    })

    static login = Yup.object().shape({
        type: Yup.boolean().required("Type Is Required."),
        email: Yup.string().email().required("email Is Required."),
        password: Yup.string().required("password Is Required."),
    })
    static initiatePasswordReset = Yup.object().shape({
        type: Yup.boolean().required("Type Is Required."),
        email: Yup.string().email().required("email Is Required."),
        password: Yup.string().required("password Is Required."),
    })
}