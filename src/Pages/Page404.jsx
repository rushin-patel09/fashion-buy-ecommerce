import React from "react";
import { Link } from "react-router";

const Page404 = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-[85dvw] h-[60dvh] max-w-[1400px] min-w-[300px] m-10">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-2xl mt-4 text-[#2b2b2b]">Oops! Page not found.</p>
        <p className="text-md mt-2 text-gray-500 text-center">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-black text-white rounded-4xl w-[150px] h-[40px] flex justify-center items-center mt-5 hover:bg-[#252525]"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
