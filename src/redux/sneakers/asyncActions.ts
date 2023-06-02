import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Sneaker } from './types';

export const fetchSneakers = createAsyncThunk<Sneaker[]>(
  'sneakers/fetchSneakers',
  async () => {
    const { data } = await axios.get<Sneaker[]>(
      'https://647862f4362560649a2daad5.mockapi.io/sneakers'
    );
    return data;
  }
);
