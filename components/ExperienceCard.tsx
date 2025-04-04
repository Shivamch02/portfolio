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
    <div className="py-2">
      <div>
        <div className="flex xl:mx-60 lg:mx-40 md:mx-20 mx-6 dark:bg-gray-900 bg-white shadow-lg px-6 py-3 rounded-md">
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
                <h2 className="text-xl font-bold text-blue-600">{jobTitle}</h2>
                <div className="flex flex-wrap gap-2 py-2">
                  <p className="dark:text-slate-400 text-black">{location}</p>
                  <button
                    type="button"
                    className="px-2 py-1 text-xs text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold block sm:hidden"
                  >
                    {startDate} {" - "} {endDate}
                  </button>
                </div>
              </div>
              <div className="">
                <button
                  type="button"
                  className="px-2 py-1 text-sm text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold hidden sm:block"
                >
                  {startDate} {" - "} {endDate}
                </button>
              </div>
            </div>
            <div className="">
              <p className="dark:text-slate-300 text-gray-600">{description}</p>
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
