import Gif from "@/components/Gif.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";
import Buttons from "@/components/Buttons.jsx";
import HeaderNews from "@/components/Header-News.jsx";

const Hours = () => {
	return (
		<GooeyEffect
			src={"/gradient-bg.png"}
			hoverSrc=""
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full "
		>
			<div className={"flex flex-col mx-auto justify-center"}>
				<div className={"flex flex-col items-center justify-center "}>

					<Gif className={""}/>
					<HeaderNews title={"Open Hours"} hideImage={true} className={"!mb-10"}/>
					<div className={ "flex flex-col items-center justify-center w-1/2 h-auto mb-10 gap-y-6 " }>

						<div className={"paragraph-styles"}>
							<p>
								<span className={"text-3xl"}>Thursday</span>
								<br/>
								<p className={"py-4"}>PANDA Pasta Party<br/>8pm - 3am<br/><br/></p>
							</p>
						</div>

						<div className={"paragraph-styles"}>
							<p>
								<span className={"text-3xl"}>Friday's Live</span>
								<br/>
								<p className={"py-4"}>Dinner + SHOW<br/>6pm - 9PM<br/></p>
							</p>
						</div>

						<div className={"paragraph-styles"}>
							<p>
								<span className={"text-3xl"}>Friday's Late</span>
								<br/>
								<p className={"py-4"}>Dinner + Dancing<br/>9pm - 3AM<br/></p>
							</p>
						</div>

						<div className={"paragraph-styles"}>
							<p>
								<span className={"text-3xl"}>Saturday</span>
								<br/>
								<p className={"py-4"}>Dinner + Disco<br/>6pm - 3AM<br/></p>
							</p>
						</div>

						<div className={"paragraph-styles"}>
							<p>
								<span className={"text-3xl"}>Sunday</span>
								<br/>
								<p className={"py-4"}>Sunday Lasagne special with a side of rnb<br/>8pm - 3AM<br/></p>
							</p>
						</div>

					<Buttons label={"Book Now"} to={"/book-now"}  className={"!w-[250px] !text-lg "} />

					</div>
				</div>
			</div>
		</GooeyEffect>
	)
}
export default Hours


