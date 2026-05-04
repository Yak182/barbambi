import HeaderNews from "@/components/Header-News.jsx";
import MediaCard, { mediaArr } from "@/components/media-card.jsx";

const Media = () => {
    return (
        <div className={"flex flex-col items-center pb-20"}>
            <HeaderNews title={"Better times are here"} />

            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 max-w-7xl items-center justify-center text-center underline "}>
                {mediaArr.map((item) => (
                    <MediaCard
                        key={item.key}
                        src={item.src}
                        alt={item.title}
                        href={item.href}
                        title={item.title}
                    />
                ))}
            </div>

        </div>
    )
}
export default Media
