import { IconCloud } from "@/components/magicui/iconcloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mysql",
  "mongodb",
  "ejs",
];

export function IconCloudDemo() {
  return (
    <div className="absolute flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg opacity-100">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
