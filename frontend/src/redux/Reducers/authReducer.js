import {  createSlice } from "@reduxjs/toolkit";
const appointmentSlice = createSlice({
    name: "softman-appointment",
    initialState: {
        currentUser: []
    
    },
    reducers: {
        loginUser: (state, action) => {
            state.currentUser = action.payload;
           
        },
        logoutUser: (state) => {
            state.currentUser = [];
        },

    },
});
export const actions = appointmentSlice.actions;
// const store = configureStore({ reducer: appointmentSlice.reducer, });
export default appointmentSlice.reducer;