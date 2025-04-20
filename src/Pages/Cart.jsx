import React, { useContext } from "react";
import CartItem from "../Components/CartItem";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  const sumofTotalItem = cartItems.reduce(
    (total, item) => total + item.qty * item.newPrice,
    0
  );
  const shippingCharge = 40;
  const finalTotal = sumofTotalItem > 0 ? shippingCharge + sumofTotalItem : 0;
  return (
    <div className="m-5 flex flex-col items-center p-5 gap-2">
      <CartItem />
      <div className="flex flex-col p-2 w-[50dvw] max-w-[716px] min-w-[315px] m-5">
        <h1 className="font-bold text-2xl pt-2">Cart Totals </h1>
        <div className="flex justify-between">
          <h4>Subtotal</h4>
          <h4>
            &#8377;
            {sumofTotalItem}.00
          </h4>
        </div>
        <div className="flex justify-between">
          <h4>Shipping Fee</h4>
          <h4>&#8377;{shippingCharge}.00</h4>
        </div>
        <div className="flex justify-between">
          <h4>Total</h4>
          <h4>&#8377;{finalTotal}.00</h4>
        </div>
        <button className="bg-black text-white h-10 my-2">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
