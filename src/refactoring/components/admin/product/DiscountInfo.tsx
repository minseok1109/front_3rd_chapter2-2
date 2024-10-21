import { Product } from "../../../../types";

interface DiscountInfoProps {
  product: Product;
}

const DiscountInfo = ({ product }: DiscountInfoProps) => {
  return (
    <>
      {product.discounts.map((discount, index) => (
        <div key={index} className="mb-2">
          <span>
            {discount.quantity}개 이상 구매 시 {discount.rate * 100}% 할인
          </span>
        </div>
      ))}
    </>
  );
};

export default DiscountInfo;
