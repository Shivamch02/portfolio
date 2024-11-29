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
          className="md:rounded-tl-lg md:rounded-tr-lg rounded-tl-md rounded-tr-md"
          src={image}
          alt={title} // Use title for accessibility
          layout="responsive"
        />
      </div>
      <div className="mt-6">
        <div className="px-4 font-bold text-xl mb-2">{title}</div>
        <p className="px-4 mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
