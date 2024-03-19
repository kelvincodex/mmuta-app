export type CompleteAccountRequestProps = {
    code: string,
    user_id: number,
}

export const ConfirmAccountRequest: CompleteAccountRequestProps = {
    code: "",
    user_id: 0,
}