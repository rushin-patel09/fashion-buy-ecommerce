import React, { useContext, useEffect } from "react";
import ProductDisplay from "../Components/ProductDisplay";
import { useNavigate, useParams } from "react-router";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { AllData, PopularInWomenData } = useContext(ShopContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const productData =
    AllData.find((e) => e.id === Number(id)) ||
    PopularInWomenData.find((e) => e.id === Number(id));

    useEffect(() => {
      if (productData === undefined) {
        // Redirect to Not Found page
        navigate('/*');
      }
    }, [productData, navigate]);

    if (productData === undefined) return null;

  return (
    <div className="productDisplay-container flex justify-center">
      <ProductDisplay productData={productData} />
    </div>
  );
};

export default Product;
