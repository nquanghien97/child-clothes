import { ProductEntity } from "@/entity/product";
import { create } from "zustand";

interface ProductState {
  selectedProduct: ProductEntity | null
  setSelectedProduct: (product: ProductEntity) => void;
}

export const useProductStore = create<ProductState>()((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product: ProductEntity) => set({ selectedProduct: product }),
}));