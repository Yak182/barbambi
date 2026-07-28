import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import Buttons from "@/components/Buttons.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const FridaysLive = () => {
	return (
		<GooeyEffect
			src={"public/media-photos/68cdc682-a009-4b0a-8809-78c13363075f.jpeg"}
			hoverSrc="public/media-photos/021105e9-26c6-4a31-8a5b-d34172136fa0.jpeg"
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full"
		>
			<div>
				<div className={"flex flex-col items-center"}>
					<HeaderNews title={"Fridays Live"} className={"!py-2 !mb-0"} />
				</div>

				<div className={"flex flex-col items-center paragraph-styles text-lg font-bold"}>
					<Buttons label={"book now"} to={"/book-now"} hoverSrc="/gradient-bg.png" />
				</div>

				<div className={"flex justify-center mt-10"}>
					<Selectors title={"Book now"}  className={"!w-[250px] !text-lg "}/>
				</div>

			</div>
		</GooeyEffect>
	)
}
export default FridaysLive
