export interface urlProps {
  category: string;
}

export interface LoginDetails {
  username: string;
  password: string;
}

export interface Cat {
  category: string;
}

export interface Category {
  images: string[];
  name: string;
  mrp: number;
  price: number;
}

export interface CategoryData {
  productId: string;
  data: Category;
}

export interface ProductsProps {
  category: String;
  images: string[];
}
