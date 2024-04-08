import React from "react";
import noreview from "@/assets/review/no_review.png";

const NoReview = ({ setReview }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center pt-[7rem] pb-[15rem] min-h-[75vh]">
      <img src={noreview.src} alt="No Review" className="w-full max-w-sm" />

      <div className="text-stone-900 text-base font-normal  leading-tight tracking-tight">
        Oops! No reviews yet.
      </div>

      <div
        className="w-[210px] h-[50px] px-10 py-4 bg-blue-600 rounded-md justify-center items-center gap-2.5 inline-flex cursor-pointer"
        onClick={() => setReview(true)}
      >
        <div className="text-white text-base font-medium  uppercase">
          Leave a Review
        </div>
      </div>
    </div>
  );
};

export default NoReview;
