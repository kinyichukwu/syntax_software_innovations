"use client";
import Navbar from "@/components/nav_bar/Navbar";
import heroDextop from "../assets/home/dextop_hero.png";
import heroMobile from "../assets/home/mobile_hero.png";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <section className=" text-gray-800 max-w-7xl mx-auto">
        <div className="container flex flex-col-reverse justify-center p-6 mx-auto lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left w-full items-center lg:items-start max-lg:my-14">
            <h1 className="text-4xl font-bold leading-none sm:text-[4rem] text-center sm:text-start">
              Find a place you <br />
              will love to live!
            </h1>

            <p className="mt-6 mb-8 sm:text-lg sm:mb-12 text-sm">
              See through the lenses of people who have <br />
              lived or visited the neighbourhood you might <br />
              have in mind.
            </p>

            <div className="relative mb-3">
              <input
                type="text"
                placeholder={"Email address"}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <AiOutlineSearch className="text-gray-400" />
              </div>
            </div>

            <button
              className="rounded-md bg-[#3366FF] px-5 py-3 text-sm text-white shadow-sm hover:bg-[#3366ffd8] 
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3861dc] 
            w-fit"
              onClick={() => {
                router.push("/review");
              }}
            >
              REVIEW
            </button>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-full w-full">
            <img
              src={heroDextop.src}
              alt=""
              className="object-contain h-72 sm:max-h-screen sm:h-full max-lg:hidden"
            />
            <img
              src={heroMobile.src}
              alt=""
              className="object-contain h-72 sm:max-h-screen sm:h-full lg:hidden mb-3"
            />
          </div>
        </div>
      </section>
    </>
  );
}
