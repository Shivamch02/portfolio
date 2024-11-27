import { Projects } from "@/components/Projects";

import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Projects />
      <Experience />
    </div>
  );
}
