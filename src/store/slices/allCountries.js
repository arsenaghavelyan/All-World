import { createSlice } from "@reduxjs/toolkit";

const allCountries = createSlice({
    name: "allCountries",
    initialState: {
        value: JSON.parse(localStorage.getItem("allCountries")) || []
    },
    reducers: {
        handleCountries(state, { payload }) {
            state.value = payload.country
            localStorage.setItem("allCountries", JSON.stringify(state.value))
        }
    }
})

export default allCountries.reducer
export const { handleCountries } = allCountries.actions
export const selectCountry = ((state) => state.allCountries.value)