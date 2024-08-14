export interface ProductVariant {
    id: string;
    name: string;
    description: string;
    image: string;
    variants: string[];
  }
  
  export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    products: ProductVariant[];
  }
  