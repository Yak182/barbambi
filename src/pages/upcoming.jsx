import HeaderNews from "../components/Header-News.jsx";
import Buttons from "../components/Buttons.jsx";

const Upcoming = () => {
    return (
        <div>
            <HeaderNews title={"Upcoming Events"} />

            <div className={"w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12"}>
                <div className={"flex flex-wrap justify-center gap-x-8 gap-y-8"}>
                    {/*  Div to render out relevant Buttons for upcoming events  */}
                    <Buttons label={"testing"}/>
                </div>
            </div>

        </div>
    )
}
export default Upcoming
