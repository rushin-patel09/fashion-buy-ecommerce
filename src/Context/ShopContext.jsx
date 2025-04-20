import React, { createContext, useState } from "react";
import AllData from "../assets/all_product.js";
import PopularInWomenData from "../assets/data.js";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id, name, image, new_price, inputSize) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (item) => item.id === id && item.size === inputSize
      );

      if (exists) {
        return prev.map((item) =>
          item.id === id && item.size === inputSize
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [
        ...prev,
        {
          id: id,
          name: name,
          image: image,
          newPrice: new_price,
          size: inputSize,
          qty: 1,
        },
      ];
    });
  };

  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((obj) => obj.id !== id));
  };

  const plusCartQty = (id) => {
    setCartItems(
      cartItems.map((obj) => {
        if (obj.id === id) {
          return { ...obj, qty: obj.qty + 1 };
        }
        return obj;
      })
    );
  };

  const minusCartQty = (id) => {
    setCartItems(
      cartItems
        .map((obj) => {
          if (obj.id === id) {
            return { ...obj, qty: obj.qty - 1 };
          }
          return obj;
        })
        .filter((item) => item.qty > 0)
    );
  };

  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };

  const contextAllValue = {
    AllData,
    PopularInWomenData,
    cartItems,
    addToCart,
    removeCartItem,
    plusCartQty,
    minusCartQty,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextAllValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
