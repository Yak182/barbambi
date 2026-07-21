import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import Buttons from "@/components/Buttons.jsx";

const FridaysLive = () => {
	return (
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
	)
}
export default FridaysLive
