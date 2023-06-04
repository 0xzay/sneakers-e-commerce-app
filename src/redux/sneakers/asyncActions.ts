import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Sneaker, SearchSneakersParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchSneakers = createAsyncThunk<Sneaker[], SearchSneakersParams>(
  'sneakers/fetchSneakers',
  async params => {
    const { sortBy, order, brand, color, search } = params;
    const { data } = await axios.get<Sneaker[]>(
      'https://647862f4362560649a2daad5.mockapi.io/sneakers',
      {
        params: pickBy({ sortBy, order, brand, color, search }, identity),
      }
    );
    return data;
  }
);
