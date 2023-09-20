import { createSlice } from "@reduxjs/toolkit";

const mode = createSlice({
    name: "mode",
    initialState: {
        value: JSON.parse(localStorage.getItem("mode")) || false
    },
    reducers: {
        handleMode(state) {
            state.value = !state.value
            localStorage.setItem("mode", JSON.stringify(state.value))
        }
    }
})

export default mode.reducer
export const { handleMode } = mode.actions
export const selectMode = ((state) => state.mode.value)