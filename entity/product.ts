
export interface ProductEntity {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  badge: string | null;
  // colors: string[];
  // colorNames: string[];
  sizes: string[];
  rating: number;
  reviews: number;
  images: string[];
  description: string;
  material: string;
  age: string;
}
