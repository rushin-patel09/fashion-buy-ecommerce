import React from "react";
import HeroImage from "../../assets/hero_image.png";

const NewArrival = () => {
  return (
    <div className="flex justify-between items-center border-1 w-[85dvw] max-w-[1400px] min-w-[300px] my-10 max-[762px]:flex-col transition-all">
      <div className="flex flex-col w-full items-start justify-center px-5 py-5 max-[762px]:w-[100%]">
        <h4 className="font-bold italic text-[#ffbcb5]">Latest Arrivals</h4>
        <h1 className="font-bold text-[#555555] capitalize text-5xl">New Collections for everyone</h1>
      </div>
      <div className="bg-[#ffdad6] w-full flex justify-center max-[762px]:w-[100%]">
        <img src={HeroImage} alt="ModelIMage" width={450}/>
      </div>
    </div>
  );
};

export default NewArrival;
