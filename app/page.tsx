import { Projects } from "@/components/Projects";

import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";
import { IconCloudDemo } from "../components/IconCloud";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <div>{/* <HomePage /> */}</div>
      <div className="grid grid-cols-1 lg:grid-cols-12 absolute inset-0">
        <div className="flex flex-col justify-center items-center col-span-7">
          <Hero />
        </div>
        <div className="col-span-5">
          <div>
            <IconCloudDemo />
          </div>
        </div>
      </div>
      <Projects />
      <Experience />
    </div>
  );
}
