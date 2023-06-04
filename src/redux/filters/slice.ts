import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilterSliceState, Sort, SortPropertyEnum } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  brandFilter: '',
  colorFilter: '',
  currentPage: 1,
  sort: {
    title: '',
    sortProperty: SortPropertyEnum.NOTHING,
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
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.brandFilter = action.payload.brandFilter;
        state.colorFilter = action.payload.colorFilter;
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        (state.brandFilter = ''),
          (state.colorFilter = ''),
          (state.sort = {
            title: '',
            sortProperty: SortPropertyEnum.NOTHING,
          });
      }
    },
  },
});

export const {
  setBrandFilter,
  setColorFilter,
  setSort,
  setSearchValue,
  setFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
