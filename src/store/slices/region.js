import { createSlice } from "@reduxjs/toolkit";

const region = createSlice({
    name: "region",
    initialState: {
        value: JSON.parse(localStorage.getItem("region")) || ""
    },
    reducers: {
        handleRegion(state, { payload }) {
            state.value = payload.region
            localStorage.setItem("region", JSON.stringify(state.value))
        }
    }
})

export default region.reducer
export const { handleRegion } = region.actions
export const selectRegion = ((state) => state.region.value)