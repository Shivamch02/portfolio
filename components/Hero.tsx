import { FaGithub } from "react-icons/fa";
export const Hero = () => {
  return (
    <div>
      <div className="xl:text-4xl lg:text:4xl text-3xl font-bold relative text-center z-20 bg-clip-text text-white py-4">
        Shivam Chaurasiya
      </div>
      <p className="text-2xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-4">
        Full Stack Developer
      </p>
      <div className="flex justify-center">
        <a href="https://github.com/Shivamch02">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full xl:px-6 xl:py-3 lg:px-6 lg:py-3 md:px-4 md:py-2 px-2 py-1 text-center me-2 mb-2 font-bold text-lg "
          >
            <div className="flex justify-center items-center text-sm md:text-lg lg:text-xl xl:text-xl">
              <FaGithub className="mr-2" /> My Github
            </div>
          </button>
        </a>
        <a href="https://drive.google.com/file/d/186Yb__0n27otZpyXCoXS9K4ZE7mIPr9k/view?usp=sharing">
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none rounded-full xl:px-6 xl:py-3 lg:px-6 lg:py-3 md:px-4 md:py-2 px-2 py-1 text-center me-2 mb-2 font-bold text-lg border border-white hover:bg-white hover:text-black"
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
