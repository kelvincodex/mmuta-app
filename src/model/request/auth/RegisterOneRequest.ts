export type RegisterOneProp = {
    type: boolean,
    email: string,
    password: string,
    language: number,
    disability_type: number,
    disability: number,
    disabled: number,
    phone: string
}

export const RegisterOneRequest: RegisterOneProp = {
    type: false,
    email: "",
    password: "",
    phone: "",
    language: 1,
    disability: 1,
    disabled: 1,
    disability_type: 1
}