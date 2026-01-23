import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
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
      title: "Resume",
      icon: (
        <IconReceipt className="h-full w-full text-black dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1qxPGkaBUmXpMqC6QHdtzt17VcB6voIUi/view?usp=sharing",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full z-50 sticky top-full">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
