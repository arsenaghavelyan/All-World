import { configureStore } from "@reduxjs/toolkit";
import allCountries from "./slices/allCountries";
import region from "./slices/region";
import search from "./slices/search";
import mode from "./slices/mode";

const store = configureStore({
    reducer:{
        allCountries,
        region,
        search,
        mode
    }
})

export default store