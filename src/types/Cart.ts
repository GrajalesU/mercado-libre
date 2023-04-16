export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  offer?: number;
  priceWithOffer?: number;
  deliverPrice?: number;
}