
import Gif from "@/components/Gif.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Buttons from "@/components/Buttons.jsx";
import HeaderNews from "@/components/Header-News.jsx";

const Saturday = () => {
	return (
		<GooeyEffect
			src={"/gradient-bg.png"}
			hoverSrc=""
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full "
		>
			<div className={"flex justify-center"}>
				<div className={"flex flex-col items-center justify-center "}>

					<Gif className={""}/>
					<HeaderNews title={"Upcoming"} hideImage={true} className={"!mb-10"}/>

					<Buttons label={"bambi burlesque"} to={"https://tickets.myguestlist.com/v26a337a2c5e665/bambi-burlesque-/evs6a337a2c65d41//?hl=en"}  className={"!w-[250px] !text-lg"}>

					</Buttons>

				</div>
			</div>
		</GooeyEffect>
	)
}
export default Saturday


