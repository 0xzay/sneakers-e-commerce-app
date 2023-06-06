import { RootState } from '../store';

export const selectWishItems = (state: RootState) => state.wish.items;
