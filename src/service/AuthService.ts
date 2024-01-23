import {BaseService} from "./BaseService";

export class AuthService {

    static InitiateRegister = (data: object, others: any) =>{
        return BaseService.apiClient(others).post("/auth/register/one", data)
    }
    static confirmAccount = (data: object, others: any) =>{
        return BaseService.apiClient(others).post("/auth/register/otp", data)
    }
    static initiatePasswordReset = (data: object, others: any) =>{
        return BaseService.apiClient(others).post("/auth/password/reset/request", data)
    }
    static confirmPasswordReset = (data: object, others: any) =>{
        return BaseService.apiClient(others).post("/auth/password/reset/validate", data)
    }
    static completePasswordReset = (data: object, others: any) =>{
        return BaseService.apiClient(others).post("/auth/password/set", data)
    }
    static login = (data: object, others: any) =>{
        return BaseService.apiClient(others).post("/auth/login", data)
    }
}
