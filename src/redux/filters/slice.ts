import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  brandFilter: '',
  colorFilter: '',
  currentPage: 1,
  sort: {
    title: 'rating',
    sortProperty: SortPropertyEnum.RATING,
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      state.brandFilter = action.payload;
    },
    setColorFilter(state, action) {
      state.colorFilter = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
  },
});

export const { setBrandFilter, setColorFilter, setSort } = filtersSlice.actions;

export default filtersSlice.reducer;
