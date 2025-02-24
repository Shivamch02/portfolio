import Image from "next/image";

export const CardInfo = ({
  title,
  description,
  image,
  imageName,
}: {
  title: string;
  description: string;
  image: string;
  imageName: string;
}) => {
  return (
    <div>
      <div className="w-full">
        <a href={`/${imageName}`} target="_blank">
          <Image
            className="rounded-tl-sm rounded-tr-sm shadow-sm"
            src={image}
            alt={title}
            layout="responsive"
            width={500}
            height={300}
          />
        </a>
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
