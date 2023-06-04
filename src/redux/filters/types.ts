export enum SortPropertyEnum {
  NOTHING = '',
  RATING = 'rating',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  title: string;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  brandFilter: string;
  colorFilter: string;
  currentPage: number;
  sort: Sort;
}
