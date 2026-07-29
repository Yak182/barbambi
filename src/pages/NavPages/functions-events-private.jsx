import HeaderNews from "../../components/Header-News.jsx";
import EnquiryForm from "../../components/enquiry-form.jsx";
import Gif from "@/components/Gif.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const FunctionsEventsPrivate = () => {
    return (
		<GooeyEffect
			src={"/gradient-bg.png"}
			hoverSrc=""
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full "
		>
			<div className={"flex flex-col items-center justify-center w-full"}>
				<Gif  className={"-mb-5"}/>
				<HeaderNews title={"FUNCTIONS, EVENTS & PRIVATE DINING\n"} hideImage={true}/>

				<p className={"paragraph-styles"}>
					IF OUR WALLS COULD TALK… WELL, COME MAKE THE STORIES FOR YOURSELF.
						<br />
					BAR BAMBI IS THE PERFECT SETTING FOR YOUR NEXT FUNCTION.
						<br />
					WE WELCOME GROUPS OF UP TO 120 GUESTS SEATED OR UP TO 200 STANDING. TIME TO SPREAD THE WORD.
				</p>

				<div className={"flex flex-col items-center justify-center w-full"}>
					<EnquiryForm />
				</div>
			</div>
			</GooeyEffect>
    )
}
export default FunctionsEventsPrivate
