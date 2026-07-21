import HeaderNews from "../components/Header-News.jsx";
import Buttons from "../components/Buttons.jsx";
import GooeyImage from "@/components/GooeyImage/index.jsx";

const Upcoming = () => {
    return (
        <GooeyImage
            hoverSrc="/bgImage_2.png"
            className="w-full min-h-screen"
            childrenClassName="w-full pt-12"
        >
            <HeaderNews title={"Upcoming Events"} />
            <div className={"w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12"}>
                <div className={"flex flex-wrap justify-center gap-x-8 gap-y-8"}>
                    <Buttons label={"testing"} to={"/"} />
                </div>
            </div>
        </GooeyImage>
    )
}

export default Upcoming
