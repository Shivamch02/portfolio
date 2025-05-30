import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconListDetails,
  IconReceipt,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-black  dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience",
      icon: (
        <IconListDetails className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://github.com/Shivamch02",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shivam-chaurasiyaa/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://x.com/_cvam?s=09",
    },
    {
      title: "Resume",
      icon: (
        <IconReceipt className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1RVMBhVH4HtgJ_jZYnfpEy3bssI8E6Etd/view?usp=sharing",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full z-50 sticky top-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
