import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState  = {
    index: 0
}


const slice = createSlice({
    name: 'intro',
    initialState,
    reducers:{
        setIntroData: (state, action)=>{
            state.index = action.payload
        },
    },

})

export const intro ={
    // action: action,
    reducer: slice.reducer,
    mutation: slice.actions,
    getter: slice.getInitialState
}