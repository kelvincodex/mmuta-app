export type CompletePasswordResetRequestProps = {
    password: string,
    password_confirmation: string,
    user_id: number,
    code: string
}

export const CompletePasswordResetRequest: CompletePasswordResetRequestProps = {
    user_id: 0,
    code: "",
    password: "",
    password_confirmation: ""
}