import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";


const Saturday = () => {
	return (
		<GooeyEffect
			src={"public/media-photos/Firefly_Gemini Flash_seed286072.png"}
			hoverSrc={"public/media-photos/Firefly_now update the image so every one in the picture is dancing 422135.png"}
			className="w-full min-h-screen"
			childrenClassName="w-full"
		>
		<div>
			<div className={"flex flex-col items-center"}>
				<HeaderNews title={"Saturday Dinner and Disco"} className={"!py-2 !mb-0"} />
			</div>

			<div className={"flex flex-col items-center paragraph-styles text-lg font-bold"}>
				<p></p>
				<p>Sat TESTING</p>
				<p>Sat TESTING</p>
				<p>Sat TESTING</p>
				<p></p>
			</div>

			<div className={"flex justify-center mt-10"}>
				<Selectors title={"Book now"}  className={"!w-[250px] !text-lg "}/>
			</div>
		</div>
		</GooeyEffect>
	)
}
export default Saturday
