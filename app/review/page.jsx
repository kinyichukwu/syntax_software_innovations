"use client";
import Navbar from "@/components/nav_bar/Navbar";
import NoReview from "@/components/review/NoReview";
import star from "@/assets/review/star.svg";
import React, { useContext, useEffect, useState } from "react";
import { FaRegThumbsDown, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { IoBookmarkOutline } from "react-icons/io5";
import ReviewCreator from "@/components/review/ReviewCreator";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/user.context";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/utils/firebase/firebase.utils";

const Review = () => {
  const { currentUser, setCurrentUser, userDetails } = useContext(UserContext);

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [review, setReview] = useState([]);

  const [state, setstate] = useState("unloaded");

  useEffect(() => {
    if (!currentUser && open) {
      router.replace("/login");
    }
  }, [open]);

  useEffect(() => {
    const q = query(collection(db, "reviews"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      const reviews = [];
      querySnapshot.forEach((doc) => {
        reviews.push(doc.data());
      });

      setReview(reviews);
      setstate("loaded");
    });

    return unsub;
  }, [currentUser]);

  return (
    <div className="overflow-x-hidden">
      <div className="w-full bg-blue-50 justify-center items-center flex ">
        <div className=" pb-4 flex-col justify-start items-center ">
          <Navbar />
          <ReviewMenu setReview={setOpen} review={review} />
        </div>
      </div>
      {state === "unloaded" ? (
        <div className="h-[80vh] flex justify-center items-center">
          <p className="">Loading...</p>
        </div>
      ) : state === "loaded" && review.length === 0 ? (
        <NoReview setReview={setOpen} />
      ) : (
        <>
          <div className="flex gap-[1.75rem] max-w-7xl mx-auto sm:p-6 p-3 mt-8">
            <div className="w-full">
              {review.map((ite, i) => (
                <ReviewMessage key={i} reviewData={ite} />
              ))}
            </div>

            <ReviewImages />
          </div>
        </>
      )}

      <ReviewCreator open={open} setOpen={setOpen} />
    </div>
  );
};

export default Review;

function ReviewMenu({ setReview, review }) {
  return (
    <div className="flex-col justify-start items-start gap-4 flex max-w-7xl w-full  px-4">
      <div className="justify-start items-start gap-[390px] flex w-full">
        <div className="flex-col justify-start items-start gap-1 flex  w-full">
          <div className="self-stretch justify-between items-center gap-4 flex w-full  max-lg:flex-col">
            <h1 className="text-stone-900 text-2xl font-medium   max-md:text-center max-md:mt-4">
              Bonny and Clyde Street, Ajao Estate, Lagos
            </h1>

            <div className=" justify-start items-center gap-4 flex">
              <button
                className=" px-10 py-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-md items-center gap-2.5  text-white text-base font-medium uppercase min-w-fit"
                onClick={() => setReview(true)}
              >
                Leave a review
              </button>

              <div className="w-14 p-4 rounded-md border border-blue-600  hover:border-blue-500 active:border-blue-700 justify-center items-center gap-2 flex">
                <IoBookmarkOutline className="w-6 h-6 relative text-blue-600 hover:text-blue-500 active:text-blue-700 cursor-pointer" />
              </div>
              <div className="w-14 p-4 rounded-md border border-blue-600 hover:border-blue-500 active:border-blue-700 justify-center items-center gap-2 flex">
                <CiShare2 className="w-6 h-6 relative text-blue-600 hover:text-blue-500 active:text-blue-700 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="justify-start items-start gap-1 flex max-md:justify-center w-full">
            <p className="text-center text-zinc-900 text-base font-semibold  leading-normal max-sm:my-4 max-md:text-center">
              “{review.length || 0}” Reviews
            </p>
          </div>
        </div>
      </div>

      <ReviewCategories />
    </div>
  );
}

function ReviewCategories() {
  return (
    <div className="w-full justify-start items-start gap-3 flex flex-wrap max-md:justify-center ">
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Schools</div>
      </div>

      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Hospitals</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Resort Park</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">
          Shopping Malls
        </div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Airport</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">
          Train Station
        </div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Nightlife</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Public Wifi</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Parking Lot</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Security</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">
          Public Transport
        </div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Bus Station</div>
      </div>
      <div className="px-2 py-1 bg-neutral-50 rounded border border-stone-900 justify-center items-center gap-2.5 flex w-fit">
        <div className="text-stone-900 text-sm font-normal  ">Quiet</div>
      </div>
      <div className="w-6 h-6 p-2.5 bg-white bg-opacity-90 rounded-[22px] justify-center items-center gap-3 flex">
        <div className="w-6 h-6 relative"></div>
      </div>
    </div>
  );
}

function ReviewMessage({ reviewData }) {
  const { review, rating, anonymus, createdAt, selectedItems, userInfo } =
    reviewData;
  const { username } = userInfo;
  return (
    <>
      <div className="flex flex-col gap-[.5rem]">
        <div className="flex justify-between items-center">
          {anonymus ? (
            <div className="flex gap-2 items-center">
              <img
                className="w-6 h-6 rounded-full"
                src="https://via.placeholder.com/24x24"
              />

              <p className="text-stone-900 text-sm font-normal">Anonymus</p>

              <div className="text-stone-900 text-opacity-60 text-sm font-normal ">
                5 months ago
              </div>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <img
                className="w-6 h-6 rounded-full"
                src="https://via.placeholder.com/24x24"
              />

              <p className="text-stone-900 text-sm font-normal">
                {username?.slice(0, 1)?.toUpperCase() + username?.slice(1)}
              </p>

              <div className="text-stone-900 text-opacity-60 text-sm font-normal ">
                5 months ago
              </div>
            </div>
          )}

          <div className="flex items-center gap-1">
            <img src={star.src} alt="" className="" />

            <div className="text-stone-900 text-sm font-normal ">
              {rating}.0
            </div>
          </div>
        </div>

        <p className="max-w-[722px] text-zinc-900 text-base font-normal w-full">
          {review}
        </p>

        <div className="flex gap-8">
          <div className="flex gap-2 items-center text-blue-950">
            <FaRegThumbsUp className="" />
            <p>1000</p>
          </div>
          <div className="flex gap-2 items-center text-blue-950">
            <FaRegThumbsDown className="" />
            <span>10</span>
          </div>

          <div className="flex gap-2 items-center text-blue-950">
            <FaRegMessage className="" />
            <span>10</span>
          </div>
        </div>
      </div>

      <div className=" w-full mx-auto h-px bg-zinc-300 my-4" />
    </>
  );
}

function ReviewImages() {
  return (
    <div className="grid  max-md:hidden md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 h-fit">
      <img
        src="https://via.placeholder.com/235x224"
        alt="Image 1"
        className="w-full h-full object-cover"
      />
      <img
        src="https://via.placeholder.com/235x224"
        alt="Image 1"
        className="w-full h-full object-cover"
      />
      <img
        src="https://via.placeholder.com/235x224"
        alt="Image 1"
        className="w-full h-full object-cover"
      />
      <img
        src="https://via.placeholder.com/235x224"
        alt="Image 1"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
