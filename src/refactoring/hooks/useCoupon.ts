import { useState } from "react";
import { ICoupon } from "../../types.ts";

export const useCoupons = (initialCoupons: ICoupon[]) => {
  return { coupons: [], addCoupon: () => undefined };
};
