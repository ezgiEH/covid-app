import { createSlice } from "@reduxjs/toolkit";
import { fetchCountries, fetchConfirmed } from "./Services";


export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        items: [],
    },
    reducers: {},
    extraReducers: {
        [fetchCountries.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchCountries.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchCountries.rejected]: (state, action) => {
            state.status = 'failed';
        },

        [fetchConfirmed.pending]: (state, action) => {
            state.status = 'loading';
        },
        [fetchConfirmed.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [fetchConfirmed.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
})

// export const selectCountry = (state) => state.country.items;
export default countrySlice.reducer;