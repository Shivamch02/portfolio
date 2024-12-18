import { FaGithub } from "react-icons/fa";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmooth";
export const Hero = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="xl:text-6xl md:text-5xl text-4xl font-bold relative text-center z-20 bg-clip-text dark:text-white  py-4 text-blue-600">
        Shivam Chaurasiya
      </div>
      <div className="-mt-4">
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="flex justify-center">
        <a
          href="https://github.com/Shivamch02"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-2 border-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full  lg:px-5 lg:py-2 md:px-4 md:py-1.5 px-2 py-1 text-center me-2 mb-2 font-bold text-lg "
          >
            <div className="flex justify-center items-center text-sm md:text-lg lg:text-xl xl:text-xl">
              <FaGithub className="mr-2" /> My Github
            </div>
          </button>
        </a>
        <a
          href="https://drive.google.com/file/d/1RVMBhVH4HtgJ_jZYnfpEy3bssI8E6Etd/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className="dark:text-white  focus:ring-4 focus:outline-none rounded-full lg:px-5 lg:py-2 md:px-4 md:py-1.5 px-3 py-1 text-center me-2 mb-2 font-bold text-lg dark:border-2 border-box dark:border-white dark:hover:bg-white dark:hover:text-black text-black border-2 border-black hover:bg-black hover:text-white"
          >
            <div className="flex justify-center items-center text-sm md:text-lg lg:text-xl xl:text-xl">
              My Resume
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};
