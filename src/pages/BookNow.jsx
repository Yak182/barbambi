import HeaderNews from "@/components/Header-News.jsx";
import Selectors from "@/components/selectors.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const BookNow = () => {
    return (
		<GooeyEffect
			src={"public/media-photos/2c38d26b-ba88-48bf-bc3c-c49115efc166.jpeg"}
			hoverSrc="public/media-photos/0d266c68-7939-46f8-90e1-903f14fa4a5e.jpeg"
			className="w-full min-h-screen"
			childrenClassName="w-full"
		>
				<div>
					<HeaderNews title={"BookNow"}/>

					<div className={"paragraph-styles"}>
						<p>BAR BAMBI IS A LATE NIGHT BAR SERVING ITALIAN COCKTAILS, WINE, SHARE PLATES & MUSIC THURSDAY - SUNDAY NIGHT.</p>
						<p>FOR FIRST DATES, DINNER DATES, BIRTHDAY DATES AND OFFICE PARTY DATES. <br/>
							BAR BAMBI TAKES BOOTH & TABLE BOOKINGS  FOR TWO RIGHT UP TO GROUPS OF 250.</p>
						<p>WALK-INS ARE ALWAYS WELCOME SUBJECT TO CAPACITY.</p>
						<p>FEEL FREE TO CONTACT OUR FRIENDLY CONCIERGE IF YOU CANNOT SEE THE BOOKING SIZE YOU ARE AFTER.</p>
						<p>DRINK OR DINE 'TIL LATE</p>
					</div>


					<div className="flex justify-center gap-20 py-14">
						<Selectors title={"book now"}/>
						<Selectors title={"Enquire"}/>
					</div>
				</div>
			</GooeyEffect>

    )
}
export default BookNow
