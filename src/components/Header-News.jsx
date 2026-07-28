import Gif from "@/components/Gif.jsx";

const HeaderNews = ({title, hideImage = false, className = "",}) => {
    return (
        <div className={"flex flex-col items-center mb-5 justify-center w-full sm:w-[612px] space-y-4 mx-auto"}>
            {!hideImage && (
				<Gif />
            )}

            <div
                className={`${className} text-bar-bambi-gold font-unique uppercase flex items-center justify-center text-center font-[500px]  text-4xl `}
            >
                {title}
            </div>
        </div>
    )
}
export default HeaderNews
