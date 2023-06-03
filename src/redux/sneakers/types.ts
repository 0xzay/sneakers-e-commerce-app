export type Sneaker = {
  id: string;
  title: string;
  brand: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  rating: number;
  color: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface SneakersSliceState {
  items: Sneaker[];
  status: Status;
}

export type SearchSneakersParams = {
  sortBy: string;
  order: string;
  brand: string;
  color: string;
  search: string;
  currentPage: string;
};
