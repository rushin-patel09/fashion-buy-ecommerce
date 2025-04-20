import React from "react";
import NewArrival from "../Components/ui/NewArrival";
import PopularInWomen from "../Components/ui/PopularInWomen";
import ExclusiveOffer from "../Components/ui/ExclusiveOffer";
import NewCollectionAll from "../Components/ui/NewCollectionAll";
import ExclusiveOfferEmail from "../Components/ui/ExclusiveOfferEmail";

const Shop = () => {
  return (
    <div className="flex items-center flex-col">
      <NewArrival />
      <PopularInWomen />
      <ExclusiveOffer />
      <NewCollectionAll />
      <ExclusiveOfferEmail />
    </div>
  );
};

export default Shop;
