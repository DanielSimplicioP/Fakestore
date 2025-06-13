export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {  // Remova a opcionalidade se sempre existir
    rate: number;
    count: number;
  };
}