import HeaderNews from "../components/Header-News.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Buttons from "@/components/Buttons.jsx";
import EventDetailCard from "@/components/Card.jsx";

const Upcoming = () => {
	return (
		<div className="w-full min-h-screen">
			<div className="w-full">
				<div className="flex flex-col items-center">
					<HeaderNews title={ "Upcoming Events" } className={ "!py-2 !mb-0 " }/>
				</div>

				<div className="flex flex-col sm:flex-row justify-center w-full 2xl:h-[500px]">
					<GooeyEffect
						src={ "gradient-bg.png" }
						hoverSrc={ "public/media-photos/Firefly_now update the image so every one in the picture is dancing 422135.png" }
						className="flex items-center justify-center gap-x-10 w-full "
						childrenClassName="flex items-center justify-center gap-x-10 w-full px-6 py-6 overflow-hidden"
					>
						{/*<VideoPlayer*/ }
						{/*	src="/media-videos/bambi-video.mov"*/ }
						{/*	className="!w-[300px] !h-[500px] border-0 border-white backdrop-blur-2xl"*/ }
						{/*/>*/ }
						<div className="flex flex-col items-center text-bar-bambi-gold font-bold gap-3 ">
							<Buttons label={ "Bambi Burlesque" }
									 to={ "https://tickets.myguestlist.com/v26a337a2c5e665/bambi-burlesque-/evs6a337a2c65d41/" }
									 className={ "!w-[500px]  !text-lg" }/>
						</div>
					</GooeyEffect>
					<div className={"flex flex-col sm:flex-row justify-center w-full xl:h-[500px]"}>
						<div className="flex items-start px-10 justify-center w-full max-h-full bg-red-500/25 z-[70]">
							<EventDetailCard
								className={"w-full flex items-center justify-center"}
								facts={[
									{ label: "Attire", value: "Vintage Glam" },
									{ label: "Cost", value: "$89pp" },
									{ label: "Attire", value: "Vintage Glam" },
									{ label: "Cost", value: "$89pp" },
									{ label: "Attire", value: "Vintage Glam" },
									{ label: "Cost", value: "$89pp" },
								]}
							/>
						</div>
						<div className="flex flex-col items-start px-10 justify-center w-full max-h-full bg-white z-[70]">
							<div className="flex flex-col items-start text-bar-bambi-gold gap-3 ">
								<EventDetailCard
									className={"w-full flex items-center justify-center"}
									facts={[
										{ label: "Attire", value: "Vintage Glam" },
										{ label: "Cost", value: "$89pp" },
									]}
								/>
							</div>
						</div>
					</div>
				</div>


				<div className="flex flex-col sm:flex-row justify-center w-full xl:h-[500px]">
					<div className="flex items-center justify-center w-full max-h-full bg-white z-[70]">
						<div className="flex flex-col items-center text-bar-bambi-gold gap-3 ">
							<p>
								BAR BAMBI IS A LATE NIGHT BAR SERVING ITALIAN COCKTAILS, WINE,
								SHARE PLATES & MUSIC THURSDAY - SUNDAY NIGHT.
							</p>
							<p>
								FOR FIRST DATES, DINNER DATES, BIRTHDAY DATES AND OFFICE PARTY DATES.
								<br/>
								BAR BAMBI TAKES BOOTH & TABLE BOOKINGS FOR TWO RIGHT UP TO GROUPS OF 250.
							</p>
							<p>WALK-INS ARE ALWAYS WELCOME SUBJECT TO CAPACITY.</p>
							<p>
								FEEL FREE TO CONTACT OUR FRIENDLY CONCIERGE IF YOU CANNOT SEE
								THE BOOKING SIZE YOU ARE AFTER.
							</p>
							<p>DRINK OR DINE 'TIL LATE</p>
						</div>
					</div>

					<GooeyEffect
						src={ "gradient-bg.png" }
						hoverSrc={ "public/media-photos/diningwithPEOPLE.jpeg" }
						className="flex items-center justify-center gap-x-10 w-full "
						childrenClassName="flex items-center justify-center gap-x-10 w-full px-6 py-6 overflow-hidden"
					>
						{/*<VideoPlayer*/ }
						{/*	src="public/media-videos/Bambi-Digital-Ad.mov"*/ }
						{/*	className="!w-[300px] !h-[500px] border-0  backdrop-blur-2xl"*/ }
						{/*/>*/ }

						<div className="flex flex-col items-center text-bar-bambi-gold font-bold gap-3">
							<div className="flex flex-col items-center text-bar-bambi-gold gap-3 ">
								<Buttons label={ "Bambi Burlesque" }
										 to={ "https://tickets.myguestlist.com/v26a337a2c5e665/bambi-burlesque-/evs6a337a2c65d41/" }
										 className={ "!w-[500px]  !text-lg" }/>
							</div>
						</div>
					</GooeyEffect>
				</div>
			</div>
		</div>
	);
};

export default Upcoming;




