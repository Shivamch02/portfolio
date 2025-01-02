import { Projects } from "@/components/Projects";

import { Experience } from "@/components/Experience";
import { HomePage } from "@/components/HomePage";
import { ContactUs } from "@/components/ContactUs";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div>
        <div>
          <HomePage />
        </div>
        <Projects />
        <Experience />
        <ContactUs />
      </div>
    </ThemeProvider>
  );
}
