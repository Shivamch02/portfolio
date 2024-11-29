import Image from "next/image";
import { ReactNode } from "react";
export const CardIcon = ({ icon }: { icon: ReactNode }) => {
  return (
    <div>
      <div
        className="flex h-8 w-8 items-center justify-center rounded-full"
        title="Next.js"
      >
        <Image src={icon} alt="icon" width={25} height={25} />
      </div>
    </div>
  );
};
