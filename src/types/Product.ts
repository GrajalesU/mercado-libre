export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
  offer?: number;
  priceWithOffer?: number;
  deliverPrice?: number;
  isFull?: boolean;
}
