import { Product } from "src/types";

export const toggleSetItem = (set: Set<string>, item: string): Set<string> => {
  const newSet = new Set(set);
  if (newSet.has(item)) {
    newSet.delete(item);
  } else {
    newSet.add(item);
  }
  return newSet;
};

export const getInitialProductState = (): Omit<Product, "id"> => ({
  name: "",
  price: 0,
  stock: 0,
  discounts: [],
});

export const createProductWithId = (product: Omit<Product, "id">): Product => {
  return { ...product, id: Date.now().toString() };
};

export const updateProudct = () => {
    
}