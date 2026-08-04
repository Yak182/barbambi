import {twMerge} from "tailwind-merge";

const VibeCard = ({
                      title,
                      description,
                      href,
                      image,
                      imageAlt = "",
                      media,                    // optional: any node (e.g. <VideoPlayer />) instead of an <img>
                      children,                 // optional: replaces the whole card body

                      // styling hooks
                      className = "",           // outer container
                      cardClassName = "",       // the card surface
                      titleClassName = "",
                      mediaClassName = "",      // the aspect-ratio box
                      imageClassName = "",
                      descriptionClassName = "",

                      ...rest
                  }) => {
    const Wrapper = href ? "a" : "div";

    return (
        <div className={twMerge("max-w-xl mx-auto p-4", className)}>
            <Wrapper
                href={href}
                className={twMerge(
                    "block bg-[#131315] transition-all duration-300 rounded-[28px] p-6 border border-white/10 shadow-2xl text-center",
                    href && "hover:bg-[#18181b] cursor-pointer",
                    cardClassName,
                    "group"
                )}
                {...rest}
            >
                {title && (
                    <h2
                        className={twMerge(
                            "text-white text-2xl md:text-3xl font-extrabold uppercase tracking-tight mb-5",
                            titleClassName
                        )}
                    >
                        {title}
                    </h2>
                )}

                {(media || image) && (
                    <div
                        className={twMerge(
                            "relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-neutral-800",
                            mediaClassName
                        )}
                    >
                        {media ?? (
                            <img
                                src={image}
                                alt={imageAlt}
                                className={twMerge(
                                    "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out",
                                    imageClassName
                                )}
                            />
                        )}
                    </div>
                )}

                {children ??
                    (description && (
                        <p
                            className={twMerge(
                                "text-neutral-300 text-sm md:text-base leading-relaxed px-2 font-normal",
                                descriptionClassName
                            )}
                        >
                            {description}
                        </p>
                    ))}
            </Wrapper>
        </div>
    );
};

export default VibeCard;