import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className="dark:bg-black pb-6 bg-white">
      <div className="flex justify-center items-center flex-col h-[calc(100vh-60px)]">
        <div className="flex flex-col justify-center items-center">
          <p className="xl:text-7xl md:text-5xl sm:text-4xl text-2xl dark:text-blue-700 text-black font-bold sm:font-medium">
            LET&apos;S WORK TOGETHER
          </p>
          {/* <div className="py-3">
            <a href="mailto:chshivam53@gmail.com">
              <button className="dark:bg-blue-700 bg-black text-white px-6 py-2 rounded-full w-full flex gap-2 dark:hover:bg-blue-800">
                Get in touch <span className="">{<IconArrowRight />}</span>
              </button>
            </a>
          </div> */}
          <div className="py-3">
            <a href="mailto:chshivam53@gmail.com">
              <button className="text-white bg-black dark:bg-blue-800 rounded-full sm:px-5 px-3 py-1.5 flex items-center justify-center group transition-all duration-300">
                <span className="transition-transform duration-300 group-hover:-translate-x-2 sm:text-lg text-md font-semibold">
                  Get in touch
                </span>
                <FaArrowRight className="text-sm opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-2 lg:px-20 md:px-10 sm:px-6 ">
        <span className="text-sm dark:text-gray-300 text-black">
          <a href="mailto:chshivam53@gmail.com">
            <span className="font-bold dark:text-white text-black">
              Email:{" "}
            </span>
            <span className=" hover:underline">Chashivam53@gmail.com</span>
          </a>
        </span>
        <span className="text-sm dark:text-gray-300 text-black">
          @2024 Shivam Chaurasiya -{" "}
          <a href="https://github.com/Shivamch02" className=" hover:underline">
            Shivamch02
          </a>
        </span>
      </div>
    </div>
  );
};
