import { FaGithub } from "react-icons/fa";
export const Hero = () => {
  return (
    <div>
      <div className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-white py-4">
        Shivam Chaurasiya
      </div>
      <p className="text-2xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-4 text-center">
        Full Stack Developer
      </p>
      <div className="flex justify-center">
        <a href="https://github.com/Shivamch02">
          <button
            type="button"
<<<<<<< HEAD
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full px-6 py-3 text-center me-2 mb-2 font-bold text-lg "
=======
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full px-6 py-3 text-center me-2 mb-2 font-bold text-lg"
>>>>>>> ed6259dd79c1651e5fbd2a28b083c87dc001a50f
          >
            <div className="flex justify-center items-center">
              <FaGithub className="mr-2" /> My Github
            </div>
          </button>
        </a>
        <a href="https://drive.google.com/file/d/186Yb__0n27otZpyXCoXS9K4ZE7mIPr9k/view?usp=sharing">
          <button
            type="button"
<<<<<<< HEAD
            className="text-white  focus:ring-4 focus:outline-none rounded-full px-6 py-3 text-center me-2 mb-2 font-bold text-lg border border-white hover:bg-white hover:text-black"
=======
            className="text-white  focus:ring-4 focus:outline-none rounded-full px-6 py-3 text-center me-2 mb-2 font-bold text-lg border border-white"
>>>>>>> ed6259dd79c1651e5fbd2a28b083c87dc001a50f
          >
            <div className="flex justify-center items-center">My Resume</div>
          </button>
        </a>
      </div>
    </div>
  );
};
