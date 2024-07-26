import { createSlice } from "@reduxjs/toolkit";

const webinarSlice = createSlice({
    name: "webinar",
    initialState: {
        webinar: {},
        account_type: "",
        info: {
            student: null,
            user: null,
            patreon: null,
        }
    },
    reducers: {
        SetWebinar: (state, action) => {
            state.webinar = action.payload;
        },
        SetAccountType: (state, action) => {
            state.account_type = action.payload;
        },
        SetStudentData: (state, action) => {
            state.info.student = action.payload;
        },
        SetUserData: (state, action) => {
            state.info.user = action.payload;
        },
        SetPatreon: (state, action) => {
            state.info.patreon = action.payload;
        },

    }
});

export const { SetWebinar, SetAccountType, SetStudentData, SetUserData, SetPatreon } = webinarSlice.actions;
export default webinarSlice.reducer;