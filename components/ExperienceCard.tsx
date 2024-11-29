import Image from "next/image";
import AvatarImg from "./icons/dev.webp";
import { TagButton } from "./TagButton";
export const ExperienceCard = ({
  jobTitle,
  location,
  startDate,
  endDate,
  description,
  skills,
}: {
  jobTitle: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}) => {
  return (
    <div className="py-4">
      <div>
        <div className="flex xl:mx-60 lg:mx-40 md:mx-20 mx-6 bg-gray-900 px-6 py-4 rounded-md">
          <div className="flex items-start">
            <Image
              className="object-cover rounded-full hidden sm:block"
              height={150}
              width={150}
              src={AvatarImg}
              alt="Avatar"
            />
          </div>
          <div>
            <div className="flex justify-between w-full">
              <div>
                <h2 className="text-xl font-bold text-blue-500">{jobTitle}</h2>
                <p className="text-slate-400">{location}</p>
              </div>
              <div className="">
                <button
                  type="button"
                  className="px-3 py-1.5 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold"
                >
                  {startDate} {" - "} {endDate}
                </button>
              </div>
            </div>
            <div className="">
              <p className="text-slate-300">{description}</p>
            </div>
            <div className="">
              <div className="flex flex-wrap gap-2 py-2">
                {skills.map((skill, index) => (
                  <TagButton language={skill} key={skill + index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
