import { Discount, Product } from "../../../types";
import { ProductItem } from "./ProductItem";

interface CartListProps {
  products: Product[];
  getRemainingStock: (product: Product) => number;
  addToCart: (product: Product) => void;
  getMaxDiscount: (discounts: Discount[]) => number;
}

const ProductList = ({
  products,
  getRemainingStock,
  addToCart,
  getMaxDiscount,
}: CartListProps) => {
  return (
    <div className="space-y-2">
      {products.map((product) => {
        const remainingStock = getRemainingStock(product);
        return (
          <ProductItem
            key={product.id}
            product={product}
            remainingStock={remainingStock}
            addToCart={addToCart}
            getMaxDiscount={getMaxDiscount}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
