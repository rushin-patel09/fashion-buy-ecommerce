import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col justify-center items-center my-10 mx-5"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold my-5">Login</h2>
        <form
          // action="/login"
          // method="POST"
          className="transition-all flex justify-center flex-col items-start border-2 rounded-xl w-[400px] py-5 px-7 max-[400px]:w-[350px]"
        >
          <label htmlFor="email" className="font-bold mt-2 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded-[3px] w-full h-[40px] px-2 placeholder:text-sm"
            placeholder="Enter email"
            required
          />

          <label htmlFor="password" className="font-bold mt-5 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border rounded-[3px] w-full h-[40px] px-2 placeholder:text-sm"
            placeholder="Enter Password"
            autoComplete="off"
            required
          />

          <button
            type="submit"
            className="border text-white font-bold bg-black rounded-[3px] w-full h-[40px] mt-10 mb-5 hover:bg-[#3a3a3a] transition"
          >
            Login
          </button>
        </form>
        <p className="m-5">
          Don't have an account?{" "}
          <Link to="/signup" className="underline font-bold text-lg">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
