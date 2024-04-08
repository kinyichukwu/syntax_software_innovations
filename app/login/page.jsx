"use client";
import React, { useContext, useEffect, useState } from "react";
import facebook from "@/assets/auth/Facebook.svg";
import google from "@/assets/auth/Google.svg";
import apple from "@/assets/auth/Apple.svg";
import Navbar from "@/components/nav_bar/Navbar";
import Input from "@/components/auth/Input";
import AuthHead from "@/components/auth/AuthHead";
import { LoginWithExternal } from "@/components/buttons/LoginWithExternal";
import { UserContext } from "@/context/user.context";
import { getName } from "@/utils/helper";
import { signInAuthUserWithEmailAndPassword } from "@/utils/firebase/firebase.utils";
import { useRouter } from "next/navigation";
import Link  from "next/link";

const defaultValue = {
  email_address: "",
  password: "",
};

const Login = () => {
  const [state, setstate] = useState("unloaded");
  const [formField, setFormField] = useState(defaultValue);

  const { currentUser, userData } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/review");
    }
  }, [currentUser]);

  const resetFormFields = () => {
    setFormField(defaultValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setstate("loading");
    const { email_address, password } = formField;

    try {
      await signInAuthUserWithEmailAndPassword(email_address, password);

      console.log("user sign in successful");
      resetFormFields();
    } catch (error) {
      console.log("user sign in failed", error);
      alert("user sign in failed");
    }
    setstate("loaded");
  };

  return (
    <div className="max-w-7xl mx-auto bg-gray-50">
      <Navbar />
      <div className="flex min-h-screen flex-1 flex-col justify-center items-center max-sm:px-6 px-2 py-12 lg:px-8   ">
        <div className="w-full max-w-[26rem] bg-white px-8 pt-8 pb-12 rounded-md">
          <AuthHead text={"Login"} />

          <div className="mt-10 sm:mx-auto sm:w-full ">
            <form className="space-y-6">
              {Object.keys(formField).map((key) => {
                return (
                  <Input
                    key={key}
                    name={getName(key)}
                    type={
                      key == "password" || key == "confirm_password"
                        ? "password"
                        : "text"
                    }
                    value={formField[key]}
                    placeholder={getName(key)}
                    onChange={(e) => {
                      setFormField((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }));
                    }}
                  />
                );
              })}

              <button
                onClick={handleSubmit}
                className="w-full h-[51px] px-10 py-4 bg-blue-600 rounded-md justify-center items-center gap-2.5 inline-flex text-base font-medium uppercase text-white"
              >
                {state == "loading" ? "loading..." : "Login"}
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
              <LoginWithExternal img={google.src} text="Login with Google"  />
              <LoginWithExternal
                img={facebook.src}
                text="Login with Facebook"
              />
              <LoginWithExternal img={apple.src} text="Login with Apple" />
            </div>

            <div className="text-center text-stone-900 text-xs font-normal  underline mt-5 mb-1">
              Forgot your password?
            </div>

            <div className="text-center">
              <span className="text-stone-900 text-xs font-normal ">
                Have an account?{" "}
              </span>
              <Link
                className="text-blue-600 text-xs font-semibold  underline cursor-pointer"
                href="/register"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
