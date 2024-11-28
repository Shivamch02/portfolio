import { IconCloudDemo } from "../components/IconCloud";
import { Hero } from "@/components/Hero";
import { FloatingDockDemo } from "./FloatingDockDemo";
export const HomePage = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-12 absolute inset-0">
        <div className="flex flex-col justify-center items-center col-span-7">
          <Hero />
        </div>
        <div className="col-span-5">
          <div>
            <IconCloudDemo />
          </div>
        </div>
      </div> */}

      {/* Floating Dock */}
      <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50">
        <FloatingDockDemo />
      </div>
    </div>
  );
};
