import { ProductEntity } from '@/entity/product';
import { create } from 'zustand';

export interface CartItem extends ProductEntity{
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cart: [] as CartItem[],
  addToCart: (item: CartItem) => set((state) => {
    const existingItem = state.cart.find((i) => i.id === item.id);
    if (existingItem) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      };
    }
    console.log("Adding to cart:", item);
    console.log('cart:', [...state.cart, item]);
    return { cart: [...state.cart, item] };
  }),
  removeFromCart: (id: number) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
  clearCart: () => set({ cart: [] }),
}));