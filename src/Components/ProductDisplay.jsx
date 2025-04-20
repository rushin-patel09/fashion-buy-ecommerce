import React, { useContext, useState } from "react";
import Star from "../assets/star_icon.png";
import Star2 from "../assets/star_dull_icon.png";
import { ShopContext } from "../Context/ShopContext";

const productDataDisplay = ({ productData }) => {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnAddCart = (id, name, image, newPrice, inputSize) => {
    if (!selectedSize) {
      setErrorMsg("Please select a size!");
    } else {
      setErrorMsg("");
      addToCart(id, name, image, newPrice, inputSize);
    }
  };

  return (
    <div className="flex justify-center gap-10 p-10 w-[91dvw] max-w-[1400px] min-w-[300px] my-10 max-[762px]:flex-col">
      <div className="flex justify-center gap-2">
        <div>
          <img
            src={productData.image}
            alt="small-preview1"
            width={75}
            className="mb-2"
          />
          <img
            src={productData.image}
            alt="small-preview2"
            width={75}
            className="mb-2"
          />
          <img
            src={productData.image}
            alt="small-preview3"
            width={75}
            className="mb-2"
          />
          <img
            src={productData.image}
            alt="small-preview4"
            width={75}
            className="mb-2"
          />
        </div>
        <div>
          <img src={productData.image} alt="productData_Image" width={450} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-1">
        <h2 className="text-lg font-bold capitalize">{productData.name}</h2>
        <div className="flex py-2">
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star} />
          <img src={Star2} />
        </div>
        <div className="flex gap-2.5 py-2">
          <h3 className="line-through text-[#8f8f8f]">
            &#8377;{productData.old_price}
          </h3>
          <h3 className="font-bold">&#8377;{productData.new_price}</h3>
        </div>
        <div className="py-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            similique voluptas alias, ipsa in, debitis, nisi at rerum impedit
            minima modi quos distinctio!
          </p>
        </div>
        <h4 className="text-sm font-bold pt-2">Select Size :</h4>
        <div className="flex gap-2.5 py-2 flex-wrap">
          <select
            onChange={(e) => setSelectedSize(e.target.value)}
            value={selectedSize}
            required
          >
            <option value="">Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        <button
          type="button"
          className="border-1 rounded-4xl w-[110px] h-[40px] px-1 my-2 bg-[black] text-white text-[13px] font-bold hover:bg-[#444444] transition-all ease-in-out
          active:scale-95 focus:ring-[#444444]"
          onClick={() =>
            handleOnAddCart(
              productData.id,
              productData.name,
              productData.image,
              productData.new_price,
              selectedSize
            )
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default productDataDisplay;
