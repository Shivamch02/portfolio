import { IconCloudDemo } from "../components/IconCloud";
import { Hero } from "@/components/Hero";
import { FloatingDockDemo } from "./FloatingDockDemo";
export const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 absolute inset-0 ">
        <div className="flex flex-col md:justify-center items-center xl:col-span-7 lg:col-span-6 md:col-span-1 md:-mt-10 mt-16 ">
          <Hero />
        </div>
        <div className="xl:col-span-5 lg:col-span-6 w-full md:col-span-1 md:mt-10 sm:mt-32 -mt-64">
          <div>
            <IconCloudDemo />
          </div>
        </div>
      </div>

      {/* Floating Dock */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50">
        <FloatingDockDemo />
      </div>
    </div>
  );
};
