import { configureStore } from "@reduxjs/toolkit";
import clockReducer from "./features/clock/clockSlice";

export const store = configureStore({
    reducer: {
        clock: clockReducer,
    },
})