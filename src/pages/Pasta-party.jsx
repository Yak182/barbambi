import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import VideoPlayer from "../components/VideoPlayer.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const PastaParty = () => {
    return (
		<GooeyEffect
			src={"/public/gradient-bg.png"}
			hoverSrc="public/media-photos/diningwithPEOPLE.jpeg"
			className="w-full min-h-screen"
			childrenClassName="w-full"
		>
			<div className={"flex flex-col items-center justify-center mx-auto"}>
				<div className={"flex flex-col items-center"}>
					<HeaderNews title={"Thursday Pasta Party"} className={"!py-2 !mb-0"} />
					<p className={"paragraph-styles font-bold text-lg !mt-[-25px]"}>8pm - late</p>
				</div>

				<VideoPlayer src="/media-videos/bambi-video.mov" />

				<div className={"flex flex-col items-center paragraph-styles text-lg font-bold"}>
					<p>Join us every week, presented by Panda Thursdays at your favourite laneway venue, Bar Bambi.</p>
					<p>Featuring our bottomless pasta party package at $69pp showcasing some of our famous dishes of Vodka Pasta and a Limoncello Spritz.</p>
					<p>With a mix of RNB tunes into house classics, it’s the perfect night to kickstart the weekend early.</p>
				</div>

				<div className={"flex justify-center mt-10"}>
					<Selectors title={"Book now"}  className={"!w-[250px] !text-lg "}/>
				</div>
			</div>

		</GooeyEffect>
    )
}
export default PastaParty
