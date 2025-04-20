import React, { useContext } from "react";
import Cross from "../assets/cart_cross_icon.png";
import { ShopContext } from "../Context/ShopContext";

const CartItem = () => {
  const { cartItems, removeCartItem, minusCartQty, plusCartQty } =
    useContext(ShopContext);
  return (
    <div className="flex flex-col gap-2 items-center w-[50dvw] max-w-[716px] min-w-[350px]">
      <h1 className="font-bold text-2xl pt-2">Your Cart </h1>
      {cartItems.length !== 0
        ? cartItems.map((element) => (
            <div
              key={element.id}
              className="border-y border-[#cccccc] flex p-2"
            >
              <img
                src={element.image}
                alt="Product-Image"
                className="mr-2.5 h-[150px]"
              />
              <div className="flex flex-col gap-2 items-start">
                <h2 className="text-xl font-semibold">{element.name}</h2>
                <p className="font-semibold">&#8377;{element.newPrice}</p>
                <div className="flex justify-center items-center">
                  <p className="mr-1 font-semibold">Size:</p>
                  <span className="mr-3">{element.size}</span>
                  <p className="mr-1 font-semibold">Qty:</p>
                  <button
                    className="mx-1 border w-7 text-center font-semibold active:scale-80 active:bg-black active:text-white transition-all"
                    onClick={() => plusCartQty(element.id)}
                  >
                    +
                  </button>
                  <span className="w-7 text-center font-bold text-lg">
                    {element.qty}
                  </span>
                  <button
                    className="mx-1 border w-7 text-center font-semibold active:scale-80 active:bg-black active:text-white transition-all"
                    onClick={() => minusCartQty(element.id)}
                  >
                    -
                  </button>
                </div>
              </div>
              <button
                className="mx-2"
                onClick={() => removeCartItem(element.id)}
              >
                <img src={Cross} alt="Delete" className="min-w-4 h-4 active:brightness-200 active:invert-100 active:scale-50 transition-all" />
              </button>
            </div>
          ))
        : "Your Cart is Empty!"}
    </div>
  );
};

export default CartItem;
