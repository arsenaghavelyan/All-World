import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
    name: "search",
    initialState: {
        value:JSON.parse(localStorage.getItem("search")) || ""
    },
    reducers: {
        handleSearch(state, { payload }) {
            state.value = payload.search
            localStorage.setItem("search", JSON.stringify(state.value))
        }
    }
})

export default search.reducer
export const {handleSearch} = search.actions
export const selectSearch = ((state) => state.search.value)