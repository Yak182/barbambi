import HeaderNews from "@/components/Header-News.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Buttons from "@/components/Buttons.jsx";
import EventDetailCard from "@/components/UpcomingCard.jsx";

const BURLESQUE_URL =
    "https://tickets.myguestlist.com/v26a337a2c5e665/bambi-burlesque-/evs6a337a2c65d41/";

const Upcoming = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <div className="flex flex-col items-center">
                <HeaderNews title={"Upcoming Events"} className={"!py-2 !mb-6 sm:!mb-10"}/>
            </div>

            <section className="flex flex-col lg:flex-row w-full lg:h-[500px]">
                <GooeyEffect
                    src={"/gradient-bg.png"}
                    hoverSrc={"/media-photos/bambi-dancing.png"}
                    className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[320px] lg:min-h-0 lg:h-full"
                    childrenClassName="flex items-center justify-center w-full h-full px-4 sm:px-6 py-8"
                >
                    <Buttons
                        label={"Bambi Burlesque"}
                        to={BURLESQUE_URL}
                        className={"!w-full !max-w-[500px] !text-base sm:!text-lg"}
                    />
                </GooeyEffect>

                <div className="flex flex-col md:flex-row w-full lg:w-1/2 lg:h-full">
                    <div
                        className="flex items-center justify-center w-full md:w-1/2 px-4 sm:px-8 py-8 md:py-6 md:overflow-y-auto">
                        <EventDetailCard
                            className={"w-full"}
                            facts={[
                                {label: "Attire", value: "Vintage Glam"},
                                {label: "Cost", value: "$89pp"},
                                {label: "Attire", value: "Vintage Glam"},
                                {label: "Cost", value: "$89pp"},
                                {label: "Attire", value: "Vintage Glam"},
                            ]}
                        />
                    </div>

                    <div
                        className="flex flex-col justify-center gap-6 w-full md:w-1/2 px-4 sm:px-8 py-8 md:py-6 bg-white md:overflow-y-auto border-b-[16px] border-solid border-transparent [border-image:url('/gradient-bg.png')_30_round] sm:border-b-[0px] ">
                        <EventDetailCard
                            className={"w-full"}
                            facts={[
                                {label: "Attire", value: "Vintage Glam"},
                                {label: "Cost", value: "$89pp"},
                            ]}
                        />
                        <EventDetailCard
                            className={"w-full"}
                            facts={[
                                {label: "Attire", value: "Vintage Glam"},
                                {label: "Cost", value: "$89pp"},
                                {label: "Testing", value: "$89pp"},
                                {label: "Testing", value: "$89pp"},
                            ]}
                        />
                    </div>
                </div>
            </section>

            <section className="flex flex-col lg:flex-row w-full lg:h-[500px]">
                <div
                    className="flex items-center justify-center w-full lg:w-1/2 bg-white px-4 sm:px-8 py-10 lg:py-6 lg:overflow-y-auto">
                    <div
                        className="flex flex-col items-center text-center text-bar-bambi-gold gap-4 max-w-prose text-sm sm:text-base leading-relaxed">
                        <p>
                            BAR BAMBI IS A LATE NIGHT BAR SERVING ITALIAN COCKTAILS, WINE,
                            SHARE PLATES &amp; MUSIC THURSDAY &ndash; SUNDAY NIGHT.
                        </p>
                        <p>
                            FOR FIRST DATES, DINNER DATES, BIRTHDAY DATES AND OFFICE PARTY DATES.
                            BAR BAMBI TAKES BOOTH &amp; TABLE BOOKINGS FOR TWO RIGHT UP TO GROUPS OF 250.
                        </p>
                        <p>WALK-INS ARE ALWAYS WELCOME SUBJECT TO CAPACITY.</p>
                        <p>
                            FEEL FREE TO CONTACT OUR FRIENDLY CONCIERGE IF YOU CANNOT SEE
                            THE BOOKING SIZE YOU ARE AFTER.
                        </p>
                        <p>DRINK OR DINE &apos;TIL LATE</p>
                    </div>
                </div>

                <GooeyEffect
                    src={"/gradient-bg.png"}
                    hoverSrc={"/media-photos/diningwithPEOPLE.jpeg"}
                    className="w-full lg:w-1/2 min-h-[260px] sm:min-h-[320px] lg:min-h-0 lg:h-full"
                    childrenClassName="flex items-center justify-center w-full h-full px-4 sm:px-6 py-8"
                >
                    <Buttons
                        label={"Bambi Burlesque"}
                        to={BURLESQUE_URL}
                        className={"!w-full !max-w-[500px] !text-base sm:!text-lg"}
                    />
                </GooeyEffect>
            </section>
        </div>
    );
};

export default Upcoming;