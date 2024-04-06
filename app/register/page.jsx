import React from "react";
import facebook from "../../assets/auth/Facebook.svg";
import google from "../../assets/auth/Google.svg";
import apple from "../../assets/auth/Apple.svg";
import Navbar from "@/components/nav_bar/Navbar";
import Input from "@/components/auth/Input";
import AuthHead from "@/components/auth/AuthHead";
import { LoginWithExternal } from "@/components/buttons/LoginWithExternal";

const Register = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
      <Navbar  />
      <div className="flex min-h-screen flex-1 flex-col justify-center items-center max-sm:px-6 px-2 py-12 lg:px-8   ">
        <div className="w-full max-w-[26rem] bg-white px-8 pt-8 pb-12 rounded-md">
          <AuthHead text={"Register"} />

          <div className="mt-10 sm:mx-auto sm:w-full ">
            <form className="space-y-6">
              <Input
                name="username"
                type="text"
                placeholder="Username"
                className="my-2"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                className="my-2"
              />

              <Input
                name="password"
                type="password"
                placeholder="Password"
                className=""
              />

              <button className="w-full h-[51px] px-10 py-4 bg-blue-600 rounded-md justify-center items-center gap-2.5 inline-flex text-base font-medium uppercase text-white">
                Register
              </button>
            </form>

            <div className="w-full h-3 justify-center items-center gap-1 inline-flex my-4">
              <div className="w-full h-px relative bg-blue-600 bg-opacity-30"></div>
              <div className="text-center text-stone-900 text-[10px] font-normal ">
                Or
              </div>
              <div className="w-full h-px relative bg-blue-600 bg-opacity-30"></div>
            </div>

            <div className="flex flex-col gap-3">
              <LoginWithExternal img={google.src} text="Register with Google" />
              <LoginWithExternal
                img={facebook.src}
                text="Register with Facebook"
              />
              <LoginWithExternal img={apple.src} text="Register with Apple" />
            </div>

            <div className="text-center text-stone-900 text-xs font-normal  underline mt-5 mb-1">
              Forgot your password?
            </div>

            <div className="text-center">
              <span className="text-stone-900 text-xs font-normal ">
                Have an account?{" "}
              </span>
              <span className="text-blue-600 text-xs font-semibold  underline cursor-pointer">
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
