import React from "react";
import { Link } from "react-router";

const ProductCards = ({ Imgfile, ProductTitle, NewPrice, OldPrice, Id }) => {
  return (
    <div>
      <div className="flex flex-col items-center w-[50dvw] max-w-[320px] min-w-[300px] m-2 text-center overflow-hidden">
        <div className="overflow-hidden w-max h-max">
          <Link to={`/product/${Id}`}>
            <img
              src={Imgfile}
              alt="Product-Image"
              className="w-full h-[345px] hover:scale-[1.1] transition-transform ease-in-out"
            />
          </Link>
        </div>
        <h3 className="p-2">{ProductTitle}</h3>
        <div className="flex justify-center">
          <span className="w-max px-1 font-semibold">&#8377;{NewPrice}</span>
          <span className="w-max px-1 line-through font-semibold text-[#5c5c5c]">
            &#8377;{OldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
