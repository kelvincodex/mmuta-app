import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IntroData, IntroDataProps} from "@/app/toolkit/data/IntroData";


const initialState = {
    introData: IntroData[0],

}

// const action = {
    // sample: createAsyncThunk('intro/action/sample', (arg: object, thunkAPI)=>{
    //     try {
    //
    //     }catch (e){
    //
    //     }
    // })
// }
const slice = createSlice({
    name: 'intro',
    initialState,
    reducers:{
        setIntroData: (state, action)=>{
            state.introData = action.payload
        },
    },
    // extraReducers: (builder)=>{
    //     builder
    //         .addCase(action.sample.pending, ()=>{})
    //         .addCase(action.sample.fulfilled, ()=>{})
    // }
})

export const intro ={
    // action: action,
    reducer: slice.reducer,
    mutation: slice.actions,
    getter: slice.getInitialState
}