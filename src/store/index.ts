import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import {rootReducer} from "./modules";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';



const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
    persistConfig,
    rootReducer
)
export const rootStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    }).concat(thunk),

})

export const persistor = persistStore(rootStore);


export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;