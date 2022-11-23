import { configureStore } from '@reduxjs/toolkit';
import countrySlice from './Country/countrySlice';


export const store = configureStore ({
    reducer: {
        country: countrySlice,
    }
})