import Image from "next/image";

export const CardInfo = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div>
      <div className="w-full">
        <Image
          className="rounded-tl-sm rounded-tr-sm shadow-sm"
          src={image}
          alt={title} // Use title for accessibility
          layout="responsive"
        />
      </div>
      <div className="mt-6">
        <div className="px-4 font-bold text-xl mb-2 text-black dark:text-white">
          {title}
        </div>
        <p className="px-4 mt-2 text-sm text-muted-foreground text-gray-900 dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
};
