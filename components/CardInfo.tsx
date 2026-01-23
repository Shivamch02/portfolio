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
        <div className="flex flex-col h-full">
            {videoSrc ? (
                <div className="relative w-full aspect-[16/10] overflow-hidden group/media p-2">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 z-10 transition-opacity duration-500 group-hover/media:opacity-0">
                            <Image
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-110"
                                src={image}
                                alt={title}
                                width={500}
                                height={300}
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
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            ) : (
                <div className="relative w-full aspect-[16/10] overflow-hidden group/media p-2">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer">
                        <Image
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/media:scale-110"
                            src={image}
                            alt={title}
                            width={500}
                            height={300}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            )}

            <div className="px-6 py-4 flex-grow selection:bg-blue-500/30">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};
