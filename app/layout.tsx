import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivam Chaurasiya",
  url: "https://shivamchaurasiya.vercel.app",
  sameAs: [
    "https://github.com/Shivamch02",
    "https://www.linkedin.com/in/shivam-chaurasiyaa",
    "https://x.com/isthatguts",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Geogo Infotech",
  },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Shivam Chaurasiya",
  description:
    "A showcase of projects by Full Stack Developer Shivam Chaurasiya, specializing in Next.js, React, and TypeScript.",
  itemListElement: [
    {
      "@type": "CreativeWork",
      name: "Movix",
      description:
        "Movix is a movie search app that allows users to search for movies and view details about them.",
      url: "https://movix-psi-two.vercel.app/",
      image: "https://shivamchaurasiya.vercel.app/movix.webp",
      creator: {
        "@type": "Person",
        name: "Shivam Chaurasiya",
        url: "https://shivamchaurasiya.vercel.app",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Medium Clone",
      description:
        "A blog app built with Next.js, TypeScript, and Tailwind CSS. The app allows users to create, edit, and delete blog posts.",
      url: "https://medium-seven-flame.vercel.app/signup",
      image: "https://shivamchaurasiya.vercel.app/medium.webp",
      creator: {
        "@type": "Person",
        name: "Shivam Chaurasiya",
        url: "https://shivamchaurasiya.vercel.app",
      },
    },
    {
      "@type": "CreativeWork",
      name: "GitHub Card",
      description:
        "It is build with React, Typescript, and Tailwind CSS. The app allows users to search for Github users and view their profile.",
      url: "https://exploregithub.vercel.app/",
      image: "https://shivamchaurasiya.vercel.app/github-card.webp",
      creator: {
        "@type": "Person",
        name: "Shivam Chaurasiya",
        url: "https://shivamchaurasiya.vercel.app",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Easy Eats",
      description:
        "A food ordering app built with React, Redux, and CSS. The app allows users to browse and search for restaurants.",
      url: "https://easyeat.vercel.app/",
      image: "https://shivamchaurasiya.vercel.app/easy-eats.webp",
      creator: {
        "@type": "Person",
        name: "Shivam Chaurasiya",
        url: "https://shivamchaurasiya.vercel.app",
      },
    },
    {
      "@type": "CreativeWork",
      name: "Netflix Clone",
      description:
        "A Netflix clone built with React, Redux, and Tailwind CSS. The app allows users to browse and search for movies and TV shows.",
      url: "https://netflixgemini.vercel.app/",
      image: "https://shivamchaurasiya.vercel.app/netflix-gpt.webp",
      creator: {
        "@type": "Person",
        name: "Shivam Chaurasiya",
        url: "https://shivamchaurasiya.vercel.app",
      },
    },
  ],
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shivam Chaurasiya",
  description:
    "I'm Shivam Chaurasiya. I'm a Full Stack Web Developer from Varanasi, India, Explore my portfolio of modern web apps and Let's build the future of the web together!",
  keywords: [
    "Shivam Chaurasiya",
    "Shivam Chaurasia",
    "Full Stack Developer",
    "Shivam Shivam",
    "Chaurasiya",
    "Chaurasiya Shivam",
    "Shivam Chaurasiya Portfolio",
    "Shivam Chaurasia Developer",
  ],
  authors: [
    { name: "Shivam Chaurasiya", url: "https://shivamchaurasiya.vercel.app" },
  ],
  openGraph: {
    title: "Shivam Chaurasiya",
    description:
      "I'm Shivam Chaurasiya. I'm a Full Stack Web Developer from Varanasi, India, Explore my portfolio of modern web apps and Let's build the future of the web together!",
    url: "https://shivamchaurasiya.vercel.app",
    siteName: "Shivam Chaurasiya",
    images: [
      {
        url: "https://shivamchaurasiya.vercel.app/home.png",
        width: 1200,
        height: 630,
        alt: "Shivam Chaurasiya Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@isthatguts",
    creator: "@isthatguts",
    title: "Shivam Chaurasiya",
    description:
      "I'm Shivam Chaurasiya. I'm a Full Stack Web Developer from Varanasi, India, Explore my portfolio of modern web apps and Let's build the future of the web together!",
    images: ["https://shivamchaurasiya.vercel.app/home.png"],
  },
  alternates: {
    canonical: "https://shivamchaurasiya.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
