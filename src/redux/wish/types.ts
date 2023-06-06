export interface WishSliceState {
  items: WishItem[];
}

export interface WishItem {
  id: string;
  title: string;
  brand: string;
  imageUrl: string;
  price: number;
}
