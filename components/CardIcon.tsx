import Image from "next/image";

export const CardIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700">
      <Image 
        src={icon} 
        alt="technology" 
        width={16} 
        height={16}
        className="object-contain"
      />
    </div>
  );
};
