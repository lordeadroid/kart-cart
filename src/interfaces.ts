interface urlProps {
  category: string;
}

interface LoginDetails {
  username: string;
  password: string;
}

interface Cat {
  category: string;
}

interface Category {
  images: string[];
  name: string;
  mrp: number;
  price: number;
}

interface CategoryData {
  productId: string;
  data: Category;
}

interface ProductsProps {
  category: String;
  images: string[];
}

export type {
  urlProps,
  LoginDetails,
  Cat,
  Category,
  CategoryData,
  ProductsProps,
};
