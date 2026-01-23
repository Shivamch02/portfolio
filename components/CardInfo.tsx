"use client";

import Image from "next/image";

export const CardInfo = ({
    title,
    description,
    image,
    imageName,
    videoSrc,
}: {
    title: string;
    description: string;
    image: any;
    imageName: string;
    videoSrc?: string;
}) => {
    return (
        <div>
            {videoSrc ? (
                <div
                    className="w-full h-44 overflow-hidden rounded-t-xl group/info relative cursor-pointer bg-black z-30"
                >
                    <div className="absolute inset-0 z-10 transition-opacity duration-300 group-hover/info:opacity-0">
                        <Image
                            className="w-full h-full object-cover"
                            src={image}
                            alt={title}
                            width={400}
                            height={200}
                        />
                    </div>
                    <video
                        src={videoSrc}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            ) : (
                <div className="w-full h-44 overflow-hidden rounded-t-xl group/info relative">
                    <a href={`/${imageName}`} target="_blank" className="block w-full h-full">
                        <Image
                            className="w-full h-full object-cover"
                            src={image}
                            alt={title}
                            width={400}
                            height={200}
                        />
                    </a>
                </div>
            )}
            <div className="px-4 py-3">
                <h3 className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 min-h-[2.5rem]">
                    {description}
                </p>
            </div>
        </div>
    );
};
