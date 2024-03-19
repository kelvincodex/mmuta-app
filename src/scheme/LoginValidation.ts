import {boolean, number, object, string} from "yup";

export const LoginValidation = object(
    {
        type: boolean().nullable().default(false),
        email: string().when('type', {
            is: (value: boolean)=> value,
            then: (schema)=>  schema.email().required()
        }),


        phone: number().typeError('Phone Number be a number').when('type', {
            is: (value: boolean)=>  !value,
            then: (schema)=> schema.required().min(11)
        }),
        password: string().required("password Is Required."),
    }
)