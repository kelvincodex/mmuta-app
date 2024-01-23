import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AuthService} from "@/service/AuthService";
import {CompletePasswordResetRequest} from "@/model/request/auth/CompletePasswordResetRequest";



const initialState = {
    token: null,
    loading: false,
    error: false,
    errors: {},
    message: null,
    userInfo: {},
    completePasswordReset: CompletePasswordResetRequest
}


const action = {
    initiateRegister: createAsyncThunk("auth/action/initiateRegister",  async (data: object, {rejectWithValue, ...props})=>{
       try {
           const response = await AuthService.InitiateRegister(data, {...props})
           return response.data
       }catch (e: any) {
           return rejectWithValue(e.response.data)
       }
    }),
    confirmAccount: createAsyncThunk("auth/action/confirmAccount",  async (data: object, {rejectWithValue, ...props})=>{
       try {
           const response = await AuthService.confirmAccount(data, {...props})
           return response.data
       }catch (e: any) {
           return rejectWithValue(e.response.data)
       }
    }),

    initiatePasswordReset: createAsyncThunk("auth/action/initiatePasswordReset",  async (data: object, {rejectWithValue, ...props})=>{
       try {
           const response = await AuthService.initiatePasswordReset(data, {...props})
           return response.data
       }catch (e: any) {
           return rejectWithValue(e.response.data)
       }
    }),
    completePasswordReset: createAsyncThunk("auth/action/completePasswordReset",  async (data: object, {rejectWithValue, ...props})=>{
        try {
            const response = await AuthService.initiatePasswordReset(data, {...props})
            return response.data
        }catch (e: any) {
            return rejectWithValue(e.response.data)
        }
    }),
    login: createAsyncThunk("auth/action/login",  async (data: object, {rejectWithValue, ...props})=>{
       try {
           const response = await AuthService.login(data, {...props})
           return response.data
       }catch (e: any) {
           return rejectWithValue(e.response.data)
       }
    }),
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateToken: (state, action)=>{
            state.token = action.payload
        },
        updateUserInfo: (state, action)=>{
            state.userInfo = action.payload
        },
        updateLoading: (state, action)=>{
            state.loading = action.payload
        },
        updateError: (state, action)=>{
            state.error = action.payload
        },
        updateErrors: (state, action)=>{
            state.errors = action.payload
        },
        updateMessage: (state, action)=>{
            state.message = action.payload
        },
        updateCompletePasswordReset: (state, action)=>{
            state.completePasswordReset = action.payload
        },
    },
    extraReducers(builder){
        builder
            //initial register
            .addCase(action.initiateRegister.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(action.initiateRegister.fulfilled, (state, {payload})=>{
                if (payload.success === false){
                    state.errors = payload.errors
                    state.loading = false
                    // alert(validationError(payload.message, payload.errors))
                }
            })
            .addCase(action.initiateRegister.rejected, (state, action)=>{
                console.log(action.payload)
                state.loading = false

            })

            //confirm account
            .addCase(action.confirmAccount.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(action.confirmAccount.fulfilled, (state, {payload})=>{
                if ( payload.success === false){
                    state.errors = payload.errors
                    state.loading = false
                    // alert(validationError(payload.message, payload.errors))
                }
            })
            .addCase(action.confirmAccount.rejected, (state, action)=>{
                console.log(action.payload)
                state.loading = false

            })

            //initiate reset password
            .addCase(action.initiatePasswordReset.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(action.initiatePasswordReset.fulfilled, (state, {payload})=>{
                if ( payload.success === false){
                    state.errors = payload.errors
                    state.message = payload.message
                    state.loading = false
                    // alert(validationError(payload.message, payload.errors))
                }
            })
            .addCase(action.initiatePasswordReset.rejected, (state, action)=>{
                console.log(action.payload)
                state.loading = false

            })


            //complete password reset
            .addCase(action.completePasswordReset.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(action.completePasswordReset.fulfilled, (state, {payload})=>{
                if ( payload.success === false){
                    state.errors = payload.errors
                    state.loading = false
                    // alert(validationError(payload.message, payload.errors))
                }
            })
            .addCase(action.completePasswordReset.rejected, (state, action)=>{
                console.log(action.payload)
                state.loading = false
            })


            //login
            .addCase(action.login.pending, (state, action)=>{
                state.loading = true
            })
            .addCase(action.login.fulfilled, (state, {payload})=>{
                if ( payload.success === false){
                    state.errors = payload.errors
                    state.loading = false
                    // alert(validationError(payload.message, payload.errors))
                }
            })
            .addCase(action.login.rejected, (state, action)=>{
                console.log(action.payload)
                state.loading = false
            })

    }
})


export const auth = {
    action: action,
    reducer: slice.reducer,
    mutation: slice.actions,
    getter: slice.getInitialState
}