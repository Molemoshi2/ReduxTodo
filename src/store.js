import { configureStore } from "@reduxjs/toolkit";
import { AddSlice } from "./storeSlices/AddTask";

const store = configureStore({
    reducer: {
        listArray:AddSlice.reducer ,

    }
});

export default store