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
  "postgresql",
  "firebase",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "postman",
  "tailwindcss",
  "redux",
  "vite",
  "mongodb",
  "ejs",
  "clouddflare",
  "supabase",
  "bootstrap",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
