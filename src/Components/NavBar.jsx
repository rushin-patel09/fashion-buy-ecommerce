import React, { useContext, useState } from "react";
import Logo from "../assets/Logo_FashionBuy.svg";
import CartLogo from "../assets/cart_icon.png";
import { NavLink } from "react-router";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { ShopContext } from "../Context/ShopContext";

const NavBarList = ({setIsOpen}) => {
  const { getTotalCartItems } = useContext(ShopContext);
  const navlinkActive = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textDecorationThickness: isActive ? "3px" : "",
      textUnderlineOffset: isActive ? "10px" : "",
      fontWeight: isActive ? "700" : "",
    };
  };

  const handlerClickCategory = () => {
    setIsOpen(false);
  }

  return (
    <>
      <NavLink to="/shop" style={navlinkActive} className="px-5" onClick={handlerClickCategory}>
        Shop
      </NavLink>
      <NavLink to="/men" style={navlinkActive} className="px-5" onClick={handlerClickCategory}>
        Men
      </NavLink>
      <NavLink to="/women" style={navlinkActive} className="px-5" onClick={handlerClickCategory}>
        Women
      </NavLink>
      <NavLink to="/kids" style={navlinkActive} className="px-5" onClick={handlerClickCategory}>
        Kids
      </NavLink>
      <NavLink
        to="/login"
        className="px-5 py-1 rounded-2xl border-2 py-auto hover:bg-[#ffe3e0] transition-all ease-in-out"
        onClick={handlerClickCategory}
      >
        Login
      </NavLink>
      <NavLink to="/cart" className="px-5 relative" onClick={handlerClickCategory}>
        <img src={CartLogo} alt="Cart" width={28} />
        <span className="absolute top-[-20%] right-2 bg-black text-white rounded-full min-w-[20px] max-w-max text-center font-bold text-sm px-0.5">
          {getTotalCartItems()}
        </span>
      </NavLink>
    </>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toogleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-10 py-5 font-medium border-b-1 sticky top-0 bg-white z-10">
      <div className="flex justify-around items-center max-[824px]:justify-between">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="FashionBuy" width="175" height="33.36" />
          </NavLink>
        </div>
        <div className="flex items-center gap-2 max-[824px]:hidden">
          <NavBarList setIsOpen={setIsOpen}/>
        </div>

        <div className="hidden items-center max-[824px]:flex">
          <button onClick={toogleNavBar}>
            {isOpen ? <RxCross2 size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          key="unique"
          className="flex flex-col items-center gap-5 pt-5 transition-opacity duration-500 opacity-0 animate-fade-in md:hidden"
        >
          <NavBarList setIsOpen={setIsOpen}/>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
