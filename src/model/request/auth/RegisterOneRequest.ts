export type InitialRegisterProp = {
    type: boolean,
    email: string,
    password: string,
    language: number,
    disability_type: number,
    disability: number,
    disabled: number,
    phone: string
}

export const RegisterOneRequest: InitialRegisterProp = {
    type: true,
    email: "morahthankgod@gmail.com",
    password: "123456",
    phone: "07042199640",
    language: 1,
    disability: 1,
    disabled: 1,
    disability_type: 1
}