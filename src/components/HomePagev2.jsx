import Buttons from "./Buttons.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const HomePageV2 = () => {
	return (
		<GooeyEffect
			hoverSrc="/bgImage_2.png"
			className="w-full h-screen"
			childrenClassName="w-full h-full"
			overlayClassName="absolute inset-0 pointer-events-none"
			overlay={
				<div className="flex flex-col sm:flex-row w-full h-full">

					<div className="flex flex-col items-center justify-start sm:justify-center w-full sm:w-1/2 h-full gap-y-8 px-6 py-10 overflow-y-auto pointer-events-auto">

						<div className="flex flex-col items-start justify-start w-full sm:w-[612px] space-y-4 shrink-0">
							<img
								src="/BarBambi_WebsiteLogoAnimation_v2.gif"
								className="w-full hover:scale-[1.02] transition-transform duration-500 ease-in-out"
								alt="main logo"
							/>
						</div>

						<div className="flex sm:hidden flex-col items-center gap-y-6 w-full pb-10">
							<Buttons label="book now" to="/book-now" hoverSrc="/example_image.jpg" />
							<Buttons label={`Thursday <br /> Pasta Party`} to={"/thursday-pasta-party"} />
							<Buttons label={"FRIDAYS LIVE"} to={"/Fridays-Live"} />
							<Buttons label={`saturday <br /> dinner & disco`} to={"/Saturday-Dinner-and-Disco"} />
							<Buttons label={`sunday<br />Sessions`} to={"/sunday-sessions"} />
							<Buttons label={`Bambi <br /> brunch`} to={"/"} />
							<Buttons label={`bottomless<br /> pasta party`} to={""} />
							<Buttons label={`party like its<br /> your birthday`} to={"/upcoming"} />
						</div>

					</div>

					<div className="hidden sm:flex items-start justify-center w-1/2 h-full gap-x-40 p-10 sm:p-20 pointer-events-auto">
						<div className="flex flex-col gap-y-20">
							<Buttons label="book now" to="/book-now" hoverSrc="/example_image.jpg" />
							<Buttons label={`Thursday <br /> Pasta Party`} to={"/thursday-pasta-party"} />
							<Buttons label={"FRIDAYS LIVE"} to={"/Fridays-Live"} />
							<Buttons label={`saturday <br /> dinner & disco`} to={"/Saturday-Dinner-and-Disco"} />
						</div>
						<div className="flex flex-col gap-y-20">
							<Buttons label={`sunday<br />Sessions`} to={"/sunday-sessions"} />
							<Buttons label={`Bambi <br /> brunch`} to={"/"} />
							<Buttons label={`bottomless<br /> pasta party`} to={""} />
							<Buttons label={`party like its<br /> your birthday`} to={"/upcoming"} />
						</div>
					</div>

				</div>
			}
		>
			<div className="flex flex-col sm:flex-row w-full h-full">
				<div className="relative w-full sm:w-1/2 h-full overflow-hidden">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="absolute inset-0 w-full h-full object-cover"
					>
						<source src="/VIDEO.mp4" type="video/mp4" />
					</video>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent" />
				</div>
				<div className="hidden sm:block w-1/2 h-full" />
			</div>
		</GooeyEffect>
	)
}
export default HomePageV2