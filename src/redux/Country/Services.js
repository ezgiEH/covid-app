import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountries = createAsyncThunk(
    'country/fetchCountries',
    async (countryCode) => {
        const response = await axios.get(`https://covid19.mathdro.id/api/countries/${countryCode}`);
        return response.data;
    }
)

export const fetchConfirmed = createAsyncThunk(
    'country/fetchConfirmed',
    async () => {
        const response = await axios.get(`https://covid19.mathdro.id/api/confirmed`);
        return response.data;
    }
)