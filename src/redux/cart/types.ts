export interface CartItem {
  id: string;
  title: string;
  brand: string;
  imageUrl: string;
  price: number;
  count: number;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
