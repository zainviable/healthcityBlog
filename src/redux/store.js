import { configureStore } from "@reduxjs/toolkit";

import webinarReducer from "./slice/webinarSlice";

export default configureStore({
    reducer: {
        webinar: webinarReducer
    }
});