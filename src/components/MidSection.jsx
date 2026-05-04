import Buttons from "./Buttons.jsx";

const MidSection = () => {
    return (
        <div className={"flex flex-col items-center justify-start flex-grow w-full"}>
            <div className={"flex flex-col items-center w-full sm:w-[612px]"}>
                <img src={"/BarBambi_WebsiteLogoAnimation_v2.gif"} className={"w-full"} alt={"main logo"}/>
                <img src={"/Walk-Ins-Website-Animation.gif"}  className={"w-full h-auto"} alt={"underneath main"}/>
            </div>

            <div className={"w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12"}>
                <div className={"flex flex-wrap justify-center gap-x-8 gap-y-8"}>
                    <Buttons label={"Reservations"} to={"/reservations"} />
                    <Buttons label={`Bottomless <br /> Pasta Party`} to={"/thursday-pasta-party"} />
                    <Buttons label={"Rhythm 'n brunch"} to={"/rhythm-n-brunch"} />
                    <Buttons label={`sunday<br />lasagne night`} to={"/sunday-lasagne-night"} />
                </div>
                <div className={"flex flex-wrap justify-center gap-x-8 gap-y-8 mt-10 "}>
                    <Buttons label={`EOFY<br />enquires`} to={"mailto:its-a-date@barbambi.com.au"} />
                    <Buttons label={`Upcoming<br />events`} to={"/upcoming"} />
                </div>
            </div>
        </div>
    )
}
export default MidSection
