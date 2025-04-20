import React from "react";
import ProductCards from "./ProductCards.jsx";
import PopularWomenData from "../../assets/data.js";

const PopularInWomen = () => {

  return (
    <div className="flex flex-col items-center w-[91dvw] max-w-[1400px] min-w-[300px] mb-2 transition-all">
      <div className="p-2">
        <h2 className="font-bold text-3xl pb-2 capitalize">Popular in women</h2>
        <hr className="border-1" />
      </div>
      <div className="flex flex-wrap justify-center m-5 transition-all">
        {PopularWomenData.map((item) => {
          return (
            <ProductCards
              key={item.id}
              Id={item.id}
              Imgfile={item.image}
              ProductTitle={item.name}
              NewPrice={item.new_price}
              OldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularInWomen;
