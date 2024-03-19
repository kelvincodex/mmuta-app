import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState  = {
    index: 0,
    data: {}
}


const slice = createSlice({
    name: 'intro',
    initialState,
    reducers:{
        setIntroData: (state, action)=>{
            state.index = action.payload
        },
        setIndex: (state, action)=>{
            state.index = action.payload
        }
    },

})

export const intro ={
    // action: action,
    reducer: slice.reducer,
    mutation: slice.actions,
    getter: slice.getInitialState
}