import React from "react";

const ExclusiveOfferEmail = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#ffe3e0] w-[80dvw] max-w-[1400px] min-w-[300px] h-[500px] my-10 max-[762px]:flex-col p-5">
      <h4 className="font-bold text-5xl italic text-[#4b4b4b] pb-2">
        Get Exclusive Offers On Email
      </h4>
      <h5 className="font-medium italic p-2 text-[#fdafaf] pb-5">
        Subscribe to ur Email Service and Never Miss an Collections
      </h5>
      <div className="relative flex items-center">
        <input type="text" className="bg-white rounded-full w-[50dvw] max-w-[700px] min-w-[275px] h-[50px] focus:outline-2 outline-[#fdafaf] px-5 pr-28" />
        <button className="h-[50px] w-[25%] max-w-[150px] min-w-[100px] bg-[#fdafaf] rounded-full absolute right-0 text-white font-bold">
        Subscribe
      </button>
      </div>
    </div>
  );
};

export default ExclusiveOfferEmail;
