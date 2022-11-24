import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries, fetchConfirmed } from "./Services";


export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        items: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchCountries.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchCountries.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchCountries.rejected]: (state, action) => {
            state.isLoading = false;
        },

        [fetchConfirmed.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchConfirmed.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchConfirmed.rejected]: (state, action) => {
            state.isLoading = false;
        },
    },
})

// export const selectCountry = (state) => state.country.items;
export default countrySlice.reducer;