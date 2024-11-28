import { Projects } from "@/components/Projects";

import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";

export default function Home() {
  return (
    <div>
      <div>
        <HomePage />
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-12 absolute inset-0">
        <div className="flex flex-col justify-center items-center xl:col-span-7 lg:col-span-6 md:col-span-1">
          <Hero />
        </div>
        <div className="xl:col-span-5 lg:col-span-6 w-full md:col-span-1 mt-10">
          <div>
            <IconCloudDemo />
          </div>
        </div>
      </div> */}
      <Projects />
      <Experience />
    </div>
  );
}
