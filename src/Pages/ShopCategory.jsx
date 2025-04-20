import React, { useEffect } from "react";
import FlatOff from "../Components/ui/FlatOff";
import ProductCards from "../Components/ui/ProductCards.jsx";
import AllData from "../assets/all_product.js";
import AOS from "aos";
import "aos/dist/aos.css";

const ShopCategory = (prop) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex items-center flex-col justify-center"
    >
      <FlatOff ImgFile={prop.banner} />
      <div className="flex flex-wrap justify-center items-center w-[91dvw] max-w-[1400px] min-w-[300px] my-10 max-[762px]:flex-col">
        {AllData.map((item) => {
          if (item.category === prop.category) {
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
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
