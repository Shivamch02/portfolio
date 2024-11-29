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
      <div className="w-full h-48">
        <Image
          className="md:rounded-tl-lg md:rounded-tr-lg rounded-tl-md rounded-tr-md hover:opacity-90 shadow-lg"
          src={image}
          alt={title} // Use title for accessibility
          layout="responsive"
        />
      </div>
      <div className="md:mt-8 lg:mt-4 sm:mt-40 z-20 mt-24">
        <div className="xl:mt-4 lg:-mt-7 md:-mt-4 -mt-3 px-4 font-bold text-xl mb-2">
          {title}
        </div>
        <p className="px-4 mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
