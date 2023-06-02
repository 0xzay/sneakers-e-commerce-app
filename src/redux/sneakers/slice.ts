import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sneaker, SneakersSliceState, Status } from './types';
import { fetchSneakers } from './asyncActions';

const initialState: SneakersSliceState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const sneakersSlice = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Sneaker[]>) {
      state.items = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSneakers.pending, state => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchSneakers.rejected, state => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = sneakersSlice.actions;

export default sneakersSlice.reducer;
