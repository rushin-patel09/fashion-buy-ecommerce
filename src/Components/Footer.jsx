import React from "react";
import Logo from "../assets/Logo_FashionBuy.svg";
import InstagramLogo from '../assets/instagram_icon.png'
import PinterestLogo from '../assets/pinterest_icon.png'
import WhatsappLogo from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center border-t-1">
      <div className="p-5">
        <img src={Logo} alt="FashionBuy" width="175" height="33.36" />
      </div>
      <div className="">
        <ul className="flex justify-center gap-10 p-2 cursor-pointer max-[482px]:flex-col text-center">
          <li>Company</li>
          <li>Product</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="p-5 flex gap-5 justify-center">
        <img src={InstagramLogo} alt="InstagramLogo" width={25} />
        <img src={PinterestLogo} alt="PinterestLogo" width={25} />
        <img src={WhatsappLogo} alt="WhatsappLogo" width={25} />
      </div>
      <span className="p-5">Cpoyright &copy;2025 All Rights Resreved</span>
    </div>
  );
};

export default Footer;
