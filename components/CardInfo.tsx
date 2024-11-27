import Image from "next/image";
export const CardInfo = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: any;
}) => {
  return (
    <div>
      <div className="w-full h-48">
        <Image
          className=" rounded-lg hover:opacity-90"
          src={image}
          alt="Movix"
          layout="responsive"
        />
      </div>
      <div className="">
        <div className="mt-4 px-4 font-bold text-xl mb-2">{title}</div>
        <p className="px-4 mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
