import { CartItem } from "../../../types";
import Cart from "./Cart";

interface CartListProps {
  cart: CartItem[];
  getAppliedDiscount: (item: CartItem) => number;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const CartList = ({
  cart,
  getAppliedDiscount,
  updateQuantity,
  removeFromCart,
}: CartListProps) => {
  return (
    <div className="space-y-2">
      {cart.map((item) => {
        const appliedDiscount = getAppliedDiscount(item);
        return (
          <Cart
            key={item.product.id}
            item={item}
            appliedDiscount={appliedDiscount}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        );
      })}
    </div>
  );
};

export default CartList;
