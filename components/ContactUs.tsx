import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

export const ContactUs = () => {
  return (
    <div className="dark:bg-black pb-6 bg-white">
      <div className="flex justify-center items-center flex-col h-[calc(100vh-60px)]">
        <div className="flex flex-col justify-center items-center">
          <p className="xl:text-7xl md:text-5xl sm:text-4xl text-2xl dark:text-blue-700 text-black font-bold sm:font-medium">
            LET&apos;S WORK TOGETHER
          </p>
          <div className="py-3">
            <a href="mailto:chshivam53@gmail.com">
              <button className="dark:bg-blue-700 bg-black text-white px-6 py-2 rounded-full w-full flex gap-2 dark:hover:bg-blue-800">
                Get in touch <span className="">{<IconArrowRight />}</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:justify-between items-center gap-2 lg:px-20 md:px-10 sm:px-6 ">
        <span className="text-sm dark:text-gray-300 text-black">
          <a href="mailto:chshivam53@gmail.com">
            <span className="font-bold dark:text-white text-black">email:</span>
            <span className=" hover:underline">chashivam53@gmail.com</span>
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
