import VideoPlayer from "@/components/VideoPlayer.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Buttons from "@/components/Buttons.jsx";
import VibeCard from "@/components/VibeCard.jsx";

const Rhythm = () => {
    return (
        <GooeyEffect
            src={"/gradient-bg.png"}
            hoverSrc="public/media-videos/Grey-Goose_2.mp4"
            className="w-full min-h-screen overflow-hidden"
            childrenClassName="w-full"
        >
            <div className={"flex flex-col items-center justify-center mx-auto p-4 my-20"}>


                <div className={"paragraph-styles"}>
                    <h1 className="font-['Syne',sans-serif] font-extrabold uppercase tracking-tight text-white text-4xl md:text-7xl text-center">
                        THE NIGHT STARTS AT BAR BAMBI
                    </h1>
                </div>

                <VideoPlayer src="/media-videos/bambi-video.mov"
                             frameClassName={"w-full max-w-7xl overflow-hidden h-[400px]"} className={"my-10"}
                             autoPlay={true}/>

                <div className={"paragraph-styles"}>
                    <h1 className={"font-['Syne',sans-serif] font-extrabold uppercase tracking-tight text-white text-4xl md:text-7xl text-center"}>
                        Step
                        into Bar bambi Restaurant, where your night begins with flavour and ends on the dancefloor. Our
                        unique
                        dining concept fuses Japanese precision with Mediterranean soul, crafted for those who live to
                        savour every moment.</h1>
                </div>

                <div className={"my-30"}>
                    <Buttons label={"book now"} to={"/book-now"}
                             className={"!w-[400px] [&_.button-design]:text-3xl "}
                    />
                </div>

                <div className={"paragraph-styles"}>
                    <h1 className={"font-['Syne',sans-serif] font-extrabold uppercase tracking-tight text-white text-4xl md:text-7xl text-center"}>
                        EAT. DRINK. DANCE. REPEAT.
                    </h1>
                </div>

                <div className={"flex items-center justify-center max-w-8xl pt-10 "}>
                    <VibeCard
                        title="Dinner With a Vibe"
                        // href=""
                        image="public/media-photos/0R7A8403.jpg"
                        imageAlt="Dinner with a vibe"
                        description="As the sun sets, the energy rises, The energy Rise, the vibe rises. "
                        cardClassName={"bg-transparent"}
                        className={""}
                    />
                    <VibeCard
                        title="Your Table is Your Ticket"
                        // href=""
                        image="public/media-photos/0R7A0366.jpg"
                        imageAlt="Dinner with a vibe"
                        description="book your dinner and get a complimentary access to the club"
                        cardClassName={"bg-transparent"}

                    />
                </div>

                <div>
                    <VibeCard
                        title="Your Table is Your Ticket"
                        // href=""
                        image="public/media-photos/0R7A0366.jpg"
                        imageAlt="Dinner with a vibe"
                        description="book your dinner and get a complimentary access to the club"
                        cardClassName={"bg-transparent"}
                        className={"my-10 "}
                    />
                </div>

            </div>
        </GooeyEffect>
    )
}
export default Rhythm
