import Image from "next/image";
import { StaticImport } from "next/image"; // For static imports

export const CardInfo = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string | StaticImport; // Ensure the type is correct for Image component
}) => {
  return (
    <div>
      <div className="w-full h-48">
        <Image
          className="md:rounded-lg rounded-md hover:opacity-90"
          src={image}
          alt={title} // Use title for accessibility
          layout="responsive"
        />
      </div>
      <div className="">
        <div className="xl:mt-4 lg:-mt-7 md:-mt-4 -mt-3 px-4 font-bold text-xl mb-2">
          {title}
        </div>
        <p className="px-4 mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
