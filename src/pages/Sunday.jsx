import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import DrinkResponsibly from "../components/drink-responsibly.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Gif from "@/components/Gif.jsx";

const Sunday = () => {
    return (
		<GooeyEffect
			src={"public/media-photos/68cdc682-a009-4b0a-8809-78c13363075f.jpeg"}
			hoverSrc="public/media-photos/021105e9-26c6-4a31-8a5b-d34172136fa0.jpeg"
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full"
			>
			<div className={"flex justify-center"}>
				<div className={"flex flex-col items-center justify-center "}>

					<Gif className={""}/>
					<HeaderNews title={"Sunday Sessions"} hideImage={true} className={"!py-2 !mb-0"}/>

					<div className={"flex flex-col items-center justify-center w-full h-auto mb-10 "}>

						<div className={"paragraph-styles !text-white"}>
							<p>new season, new night! every sunday with a side of rnb.</p>
							<p className={"text-2xl sm:text-4xl"}>$18PP</p>
							<p className={"text-lg"}>traditional lasagne</p>
							<p>layers of pork & veal mince + bechamel sauce</p>
							<p className={"text-lg"}>OR</p>
							<p className={"text-lg"}>vodka lasagne</p>
							<p>rich vodka sauce, layered with buffalo mozzarella,</p>
							<p>freshly whipped ricotta & basil</p>
						</div>

						<HeaderNews title={"want more?"} hideImage={true} className={"py-15"}/>

						<div className={"paragraph-styles text-xl !text-white"}>
							<p>rocket salad $10.00</p>
							<p>Mixed salumi platter $15.00</p>
							<p>+</p>
							<p>1.5 hour all inclusive drinks package $55pp</p>
							<p className={"text-base"}>includes bubbles, beer, wine & spritz</p>
						</div>

						<br/>
						<br/>

						<div className={"flex items-center justify-center gap-10"}>
							<Selectors title={"Book now"}/>
							<Selectors title={"enquire"}/>
						</div>

						<DrinkResponsibly className={"!text-white"}/>
					</div>
				</div>
			</div>
			</GooeyEffect>
    )
}
export default Sunday

