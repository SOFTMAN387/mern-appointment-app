import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";
import  storage  from "redux-persist/lib/storage";
import { persistStore,persistReducer } from "redux-persist";

const persistConfig={
    key:"map-key",
    storage,
}
const persistedReducer=persistReducer(persistConfig,authReducer);
// const rootReducer=combineReducers({
//     user:userReducer
// });
export const store=configureStore({
    // reducer:rootReducer
    reducer:persistedReducer
});
export const persistor=persistStore(store);