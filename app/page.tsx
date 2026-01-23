import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";
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
      <Tools />
      <Experience />
      <Contributions />
      <ContactUs />
    </div>
  );
}
