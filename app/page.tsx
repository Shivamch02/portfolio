import { Projects } from "@/components/Projects";
<<<<<<< HEAD

import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";
=======
import { IconCloudDemo } from "../components/IconCloud";
import { Hero } from "@/components/Hero";
>>>>>>> ed6259dd79c1651e5fbd2a28b083c87dc001a50f

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
      <HomePage />
=======
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
>>>>>>> ed6259dd79c1651e5fbd2a28b083c87dc001a50f
      <Projects />
      <Experience />
    </div>
  );
}
