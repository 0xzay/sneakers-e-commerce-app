import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrencySliceState } from './types';

const initialState: CurrencySliceState = {
  currency: 'RUB',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { setItems } = currencySlice.actions;

export default currencySlice.reducer;
