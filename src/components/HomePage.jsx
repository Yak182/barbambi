import Buttons from "./Buttons.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Gif from "@/components/Gif.jsx";

const HomePage = () => {
    return (
		<GooeyEffect
			src={"/media-photos/gradient-version.jpeg"}
			hoverSrc="/40fc0d67-eb9b-4f88-b2ac-8a0a004d636b.jpeg"
			className="w-full min-h-screen"
			childrenClassName="w-full"

		>

			<div className="flex sm:flex-col w-full h-full">
				<div className="flex flex-col items-center justify-center sm:justify-start w-full h-full gap-y-8 px-6 py-10 overflow-y-auto">
					<div className="flex-col sm:flex items-start justify-start w-full sm:w-[612px] space-y-4 shrink-0">
						<Gif className={"hover-wipe"}/>
					</div>

					<div className="sm:hidden flex flex-col items-center gap-y-6 w-full pb-10">
						<Buttons label="book now" to="/book-now"  />
						<Buttons label={`Thursday <br /> Pasta Party`} to={"/thursday-pasta-party"} />
						<Buttons label={"FRIDAYS LIVE"} to={"/Fridays-Live"} />
						<Buttons label={`saturday <br /> dinner & disco`} to={"/Saturday-Dinner-and-Disco"} />
						<Buttons label={`sunday<br />Sessions`} to={"/sunday-sessions"} />
						<Buttons label={`Bambi <br /> brunch`} to={"/"} />
						<Buttons label={`bottomless<br /> pasta party`} to={""} />
						<Buttons label={`party like its<br /> your birthday`} to={"/upcoming"} />
					</div>

					<div className={"hidden sm:flex sm:flex-col sm:w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 "}>
						<div className={"flex flex-wrap justify-center gap-x-8 "}>
							<Buttons label={"book now"} to={"/book-now"} hoverSrc={"/example_image.jpg"}  />
						</div>
						<div className={"flex flex-wrap justify-center gap-x-8 gap-y-8 mt-10"} >
							<Buttons label={"FRIDAYS LIVE"} to={"/Fridays-Live"} />
							<Buttons label={`Thursday <br /> Pasta Party`} to={"/thursday-pasta-party"} />
							<Buttons label={`saturday <br /> dinner & disco`} to={"/Saturday-Dinner-and-Disco"} />
							<Buttons label={`sunday<br />Sessions`} to={"/sunday-sessions"} />
						</div>
						<div className={"flex flex-wrap justify-center  gap-x-8 gap-y-8 mt-10 "}>
							<Buttons label={`Bambi <br /> brunch`} to={"/"} />
							<Buttons label={`bottomless<br /> pasta party`} to={""} />
							<Buttons label={`party like its<br /> your birthday`} to={"/upcoming"} />
							<Buttons label={`Upcoming<br />events`} to={"/upcoming"} />
						</div>
					</div>

				</div>
			</div>

		</GooeyEffect>

	)

}
export default HomePage
