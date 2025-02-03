import { IconCloudDemo } from "../components/IconCloud";
import { Hero } from "@/components/Hero";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 absolute inset-0 ">
        <div className="flex flex-col md:justify-center items-center xl:col-span-7 lg:col-span-6 md:col-span-1 md:-mt-10 mt-16 ">
          <Hero />
        </div>
        <div className="xl:col-span-5 lg:col-span-6 w-full md:col-span-1 md:mt-10 sm:mt-32 -mt-20">
          <div>
            <IconCloudDemo />
          </div>
        </div>
      </div>

      <div className="fixed bottom-10 flex justify-center z-50 w-full">
        <ThemeProvider>
          <div className="flex sm:justify-center md:gap-2 w-full max-w-screen-md px-4 items-center">
            <div className="ml-32 sm:ml-0 -mt-7 sm:-mt-0">
              <FloatingDockDemo />
            </div>

            <div className="flex sm:justify-end -ml-24 sm:-ml-0">
              <ThemeToggle />
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};
