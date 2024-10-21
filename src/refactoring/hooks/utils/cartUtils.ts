import { CartItem, Coupon } from "../../../types";

export const calculateItemTotal = (item: CartItem) => {
  const total = item.product.price * item.quantity;

  const discountAmount = item.product.discounts.reduce(
    (maxDiscount, discount) => {
      if (item.quantity >= discount.quantity) {
        return Math.max(maxDiscount, total * discount.rate);
      }
      return maxDiscount;
    },
    0
  );

  return total - discountAmount;
};

export const getMaxApplicableDiscount = (item: CartItem) => {
  return item.product.discounts.reduce((maxDiscountRate, discount) => {
    if (item.quantity >= discount.quantity) {
      return Math.max(discount.rate, 0);
    }
    return maxDiscountRate;
  }, 0);
};

export const calculateCartTotal = (
  cart: CartItem[],
  selectedCoupon: Coupon | null
) => {
  const totalBeforeDiscount = cart.reduce(
    (total, item) => (total += item.product.price * item.quantity),
    0
  );

  let totalAfterDiscount = cart.reduce((total, item) => {
    return (total += calculateItemTotal(item));
  }, 0);

  let totalDiscount = totalBeforeDiscount - totalAfterDiscount;

  if (selectedCoupon !== null) {
    if (selectedCoupon.discountType === "amount") {
      totalAfterDiscount -= selectedCoupon.discountValue;
      totalDiscount += selectedCoupon.discountValue;
    } else {
      totalAfterDiscount -=
        totalAfterDiscount * (selectedCoupon.discountValue / 100);
      totalDiscount = totalBeforeDiscount - totalAfterDiscount;
    }
  }
  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    totalDiscount,
  };
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] => {
  const test = cart
    .map((item) => {
      if (item.product.id === productId) {
        const maxStock = item.product.stock;
        const updatedQuantity = Math.min(newQuantity, maxStock);
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);
  return test;
};
