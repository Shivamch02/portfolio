import { Projects } from "@/components/Projects";

import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";
import { ContactUs } from "@/components/ContactUs";
import Contributions from "@/components/Contribuitons";

export default function Home() {
  return (
    <div>
      <div>
        <HomePage />
      </div>
      <Projects />  
      <Experience />
      <Contributions />
      <ContactUs />
    </div>
  );
}
