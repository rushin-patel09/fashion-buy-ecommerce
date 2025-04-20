import React from "react";
import ExclusiveOfferImg from "../../assets/exclusive_image.png";

const ExclusiveOffer = () => {
  return (
    <div className="flex justify-between items-center bg-[#ffe3e0] w-[85dvw] max-w-[1400px] min-w-[300px] my-10 max-[762px]:flex-col border-1">
      <div className="flex flex-col w-full items-start justify-center px-10 py-5 max-[762px]:w-[100%]">
        <h4 className="font-bold text-5xl italic text-[#4b4b4b]">Exclusive Offers For You</h4>
        <h5 className="font-black italic p-2 text-[#fdafaf]">ONLY ON OUR WEBSITE</h5>
        <button className="bg-white rounded-full px-3 py-2 font-bold text-[#4b4b4b]">
          Check Now
        </button>
      </div>
      <div className="flex justify-center px-5">
        <img src={ExclusiveOfferImg} alt="" width={450}/>
      </div>
    </div>
  );
};

export default ExclusiveOffer;
