import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";

const PastaParty = () => {
	return (
		<div>
			<div className={"flex flex-col items-center"}>
				<HeaderNews title={"Fridays Live"} className={"!py-2 !mb-0"} />
			</div>

			<div className={"flex flex-col items-center paragraph-styles text-lg font-bold"}>
				<p></p>
				<p>TESTING</p>
				<p></p>
			</div>

			<div className={"flex justify-center mt-10"}>
				<Selectors title={"Book now"}  className={"!w-[250px] !text-lg "}/>
			</div>

		</div>
	)
}
export default PastaParty
