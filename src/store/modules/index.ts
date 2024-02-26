import {combineReducers} from "@reduxjs/toolkit";
import {auth} from "./auth";
import {intro} from "@/store/modules/intro";

export const rootReducer = combineReducers({
    auth: auth.reducer,
    intro: intro.reducer,
})