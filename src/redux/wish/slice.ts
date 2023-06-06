import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WishSliceState, WishItem } from './types';
import { getWishFromLS } from '../../utils/getWishFromLS';

const initialState: WishSliceState = getWishFromLS();

const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    wishItem(state, action: PayloadAction<WishItem>) {
      const findItem = state.items.find(obj => obj.id === action.payload.id);
      if (findItem) {
        return;
      }
      state.items.push(action.payload);
    },
    removeWishItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(obj => obj.id !== action.payload);
    },
    clearWishItems(state) {
      state.items = [];
    },
  },
});

export const { wishItem, removeWishItem, clearWishItems } = wishSlice.actions;

export default wishSlice.reducer;
