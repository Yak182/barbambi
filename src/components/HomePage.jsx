import Buttons from "./Buttons.jsx";

const HomePage = () => {
    return (
		<div className={ "flex flex-col items-center justify-start flex-grow w-full" }>
			<div className={"flex flex-col items-center w-full sm:w-[612px] space-y-4"}>
			    <img src={"/BarBambi_WebsiteLogoAnimation_v2.gif"} className={"w-full hover:scale-[1.02] transition-transform duration-500 ease-in-out cursor-pointer"} alt={"main logo"}/>
			</div>

			<div className={"w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12"}>
				<div className={"flex flex-wrap justify-center gap-x-8 mt-[-10px]"}>
					<Buttons label={"book now"} to={"/book-now"} />
				</div>
			    <div className={"flex flex-wrap justify-center gap-x-8 gap-y-8 mt-10"} >
			        <Buttons label={`Thursday <br /> Pasta Party`} to={"/thursday-pasta-party"} />
			        <Buttons label={"FRIDAYS LIVE"} to={"/Fridays-Live"} />
			        <Buttons label={`saturday <br /> dinner & disco`} to={"/Saturday-Dinner-and-Disco"} />
			        <Buttons label={`sunday<br />Sessions`} to={"/sunday-sessions"} />
			    </div>
			    <div className={"flex flex-wrap justify-center gap-x-8 gap-y-8 mt-10 "}>
			        <Buttons label={`Bambi <br /> brunch`} to={"/"} />
			        <Buttons label={`bottomless<br /> pasta party`} to={""} />
			        <Buttons label={`party like its<br /> your birthday`} to={"/upcoming"} />
			        <Buttons label={`Upcoming<br />events`} to={"/upcoming"} />
			    </div>
			</div>
		</div>
	)

}
export default HomePage
