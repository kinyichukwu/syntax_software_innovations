"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { FaStar } from "react-icons/fa";

export default function ReviewCreator() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  const items = [
    { name: "Parking Lot", selected: false },
    { name: "Nightlife", selected: false },
    { name: "Hospitals", selected: false },
    { name: "Adult Home", selected: false },
    { name: "Schools", selected: false },
    { name: "Free Wi-Fi", selected: false },
    { name: "Pet Store", selected: false },
    { name: "Childcare", selected: false },
    { name: "Gym", selected: false },
    { name: "Security", selected: false },
    { name: "Hospitals", selected: false },
    { name: "Adult Home", selected: false },
    { name: "Schools", selected: false },
    { name: "Free Wi-Fi", selected: false },
    { name: "Pet Store", selected: false },
    { name: "Childcare", selected: false },
    { name: "Gym", selected: false },
    { name: "Security", selected: false },
    { name: "Hospitals", selected: false },
    { name: "Adult Home", selected: false },
    { name: "Schools", selected: false },
    { name: "Free Wi-Fi", selected: false },
    { name: "Pet Store", selected: false },
    { name: "Childcare", selected: false },
    { name: "Gym", selected: false },
    { name: "Security", selected: false },
    { name: "Hospitals", selected: false },
    { name: "Adult Home", selected: false },
    { name: "Schools", selected: false },
    { name: "Free Wi-Fi", selected: false },
    { name: "Pet Store", selected: false },
    { name: "Childcare", selected: false },
    { name: "Gym", selected: false },
    { name: "Security", selected: false },
    // Add more items as needed
  ];

  const [selectedItems, setSelectedItems] = useState(items);

  const toggleSelection = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems[index].selected = !updatedItems[index].selected;
    setSelectedItems(updatedItems);
  };

  const [rating, setRating] = useState(0);

  const [anonymus, setAnonymus] = useState(false);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl min-h-[30rem]">
                <div className="flex flex-col p-6 bg-white">
                  <div className="">
                    <h1 className="text-center  font-medium text-[#1E1E1E] text-lg leading-[1.5rem] tracking-[0.00938rem] mb-2">
                      Review Location
                    </h1>
                    <p className="my-2   font-medium text-[#1E1E1E] text-xl leading-[1.5rem]">
                      Bonny and Clyde Street, Ajao Estate, Lagos
                    </p>
                  </div>

                  <div className="relative">
                    <div className="w-full h-[50px] px-4 py-2 bg-sky-50 rounded-md justify-center items-center gap-2 flex my-4">
                      <div className="grow shrink basis-0 text-stone-900 text-sm font-normal  leading-none">
                        Select Amenities
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-4 h-4 relative cursor-pointer"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 5C11.72 5 11.47 5.11 11.29 5.29L8 8.59L4.71 5.29C4.53 5.11 4.28 5 4 5C3.45 5 3 5.45 3 6C3 6.28 3.11 6.53 3.29 6.71L7.29 10.71C7.47 10.89 7.72 11 8 11C8.28 11 8.53 10.89 8.71 10.71L12.71 6.71C12.89 6.53 13 6.28 13 6C13 5.45 12.55 5 12 5Z"
                          fill="#8F95B2"
                        />
                      </svg>
                    </div>
                    {/**
                    <div className="w-full h-[164px]  bg-sky-50 rounded-md rounded-br-md border border-violet-200 absolute top-[60px]">
                    
                   <div className="w-full h-[164px] p-4 left-0 top-0 absolute justify-start items-start gap-6 flex flex-wrap overflow-hidden">
                        <div className="flex-col justify-start items-start gap-2 flex">
                          {selectedItems.slice(0, 5).map((item, index) => (
                            <div
                              className={`rounded justify-start items-center gap-3 flex`}
                              onClick={() => toggleSelection(index)}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 focus:outline-none"
                                checked={item.selected}
                              />

                              <p className="text-stone-900 text-sm font-normal leading-tight ">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                          {selectedItems.slice(0, 5).map((item, index) => (
                            <div
                              className={`rounded justify-start items-center gap-3 flex`}
                              onClick={() => toggleSelection(index)}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 focus:outline-none"
                                checked={item.selected}
                              />

                              <p className="text-stone-900 text-sm font-normal leading-tight ">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                          {selectedItems.slice(0, 5).map((item, index) => (
                            <div
                              className={`rounded justify-start items-center gap-3 flex`}
                              onClick={() => toggleSelection(index)}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 focus:outline-none"
                                checked={item.selected}
                              />

                              <p className="text-stone-900 text-sm font-normal leading-tight ">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                          {selectedItems.slice(0, 5).map((item, index) => (
                            <div
                              className={`rounded justify-start items-center gap-3 flex`}
                              onClick={() => toggleSelection(index)}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 focus:outline-none"
                                checked={item.selected}
                              />

                              <p className="text-stone-900 text-sm font-normal leading-tight ">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex-col justify-start items-start gap-2 flex">
                          {selectedItems.slice(0, 5).map((item, index) => (
                            <div
                              className={`rounded justify-start items-center gap-3 flex`}
                              onClick={() => toggleSelection(index)}
                              key={index}
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 focus:outline-none"
                                checked={item.selected}
                              />

                              <p className="text-stone-900 text-sm font-normal leading-tight ">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
              
                    </div>
                        */}
                  </div>

                  <div className=" flex-col justify-center items-start gap-3.5 flex">
                    <div className="self-stretch text-stone-900 text-sm font-medium ">
                      Rate location
                    </div>

                    <div className="justify-end items-center gap-1 inline-flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <FaStar
                            className={`w-6 h-6 text-[#FFC700] ${
                              i <= rating ? "opacity-100" : "opacity-40"
                            } cursor-pointer`}
                            onClick={() => setRating(i)}
                          />
                        ))}
                    </div>
                  </div>

                  <h1 className=" text-stone-900 text-sm font-normal mt-6 mb-3">
                    Write Review
                  </h1>

                  <textarea className="w-full p-3 bg-neutral-50 rounded-md border border-violet-200 leading-[18px] tracking-tight h-[173px]" />

                  <div className="flex mt-4 mb-6 items-center gap-3">
                    <input
                      type="checkbox"
                      className="w-4 h-4 appearance-none rounded border border-gray-300 checked:bg-green-500 checked:border-green-500 focus:outline-none cursor-pointer"
                      checked={anonymus}
                      onClick={() => setAnonymus(!anonymus)}
                    />

                    <p className="text-neutral-600 text-sm font-normal">
                      Post as Anonymous
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md bg-blue-600 px-9 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3   "
                      onClick={() => setOpen(false)}
                    >
                      SUBMIT
                    </button>

                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md  px-9 py-4 text-sm font-semibold shadow-sm hover:text-blue-500 sm:ml-3 border-indigo-500 border text-blue-600"
                      onClick={() => setOpen(false)}
                    >
                      CANCEL
                    </button>

                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
