export type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

export type Products = Array<Product>;

export type FullProductInfo = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  images: Array<string>;
};
