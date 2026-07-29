import HeaderNews from "@/components/Header-News.jsx";
import Selectors from "@/components/selectors.jsx";
import DrinkResponsibly from "@/components/drink-responsibly.jsx";
import Gif from "@/components/Gif.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const Sunday = () => {
	return (
		<GooeyEffect
			src={"/gradient-bg.png"}
			hoverSrc="public/media-photos/BarBambi_013-2-1024x683.jpg"
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full "
		>
			<div className={"flex justify-center"}>
				<div className={"flex flex-col items-center justify-center "}>

					<Gif className={""}/>
					<HeaderNews title={"About"} hideImage={true} className={"!mb-10"}/>

					<div className={ "flex flex-col items-center justify-center w-full h-auto mb-10 gap-y-6 " }>

						<div className={ "paragraph-styles !text-white" }>
							<p>
								Go where the night is (always) young.<br/>Serving food, music, and entertainment, Bar
								Bambi is a Melbourne nightspot for those who hate going home. Especially alone.<br/>Strut
								or stumble down AC/DC Lane, and you’ll find Italian cocktails, wine, share plates, and a
								little dose of debauchery, every Thursday – Sunday night.<br/><br/>Seeking decadence?
								Join us for dinner, with a side of entertainment. Soon bums on seats will become feet on
								tables.<br/>Seeking formal dining? Suit up, and allow us to recommend one of our quieter
								neighbours next door.
							</p>
						</div>

						<div className={"paragraph-styles !text-white gap-y-10"}>
							<p>We offer live music on Fridays from 6pm – 9pm.&nbsp;Ask the piano man nicely and he’ll play
								you a tune.<br/>Saturday nights are strictly dinner &amp; disco.<br/><br/>We recommend the
								6pm booking for a quieter dinner.<br/>For an eye-twinkling night out, filled with good food
								and flowing drinks, we’d advise a booking from 7:30pm onwards.
							</p>
						</div>

						<div className={ "paragraph-styles !text-white" }>
							<p><strong>WALK-INS are always welcome.</strong><br/><br/>All dinner bookings in our
								restaurant offer the choice of a selection of dishes at $79pp for food on a
								thursday friday, then $89pp on a saturday.<br/>Click below to review our dinner
								menu.<a
									href="https://web.archive.org/web/20250806003451/https://barbambi.com.au/uploads/items/1680074154q5hw6b5fz988jeyrue1anl8gnaa13m.pdf"><br/></a><strong><u><a
									href="https://web.archive.org/web/20250806003451/https://barbambi.com.au/uploads/items/1680074154q5hw6b5fz988jeyrue1anl8gnaa13m.pdf">MENU</a></u></strong><br/><br/>If
								you’re a theatre goer or enjoy your colleagues’ company after hours, the bar is the
								place to be.<br/>Serving the same delicious dishes as the restaurant area.<br/><br/>Click
								below for our bar menu<br/><strong><u>BAR MENU</u></strong><strong><br/><br/>ALL
									BOOKINGS ARE FOR 18+ GUESTS ONLY.</strong><br/>PLEASE NOTE ON SPECIAL EVENTS AND
								SUBJECT TO AVAILABILITY + VENUE CAPACITY, YOU MAY BE REQUIRED TO DEPART THE VENUE AFTER
								YOUR DINNER BOOKING.<br/><br/>CONTACT OUR FRIENDLY CONCIERGE TEAM IF YOU CANNOT SEE THE
								BOOKING YOU’RE AFTER.<br/>DRINK OR DINE TIL LATE.<br/>
							</p>
						</div>

						<br/>
						<br/>

						<div className={ "flex items-center justify-center gap-10" }>
							<Selectors title={ "Book now" }/>
							<Selectors title={ "enquire" }/>
						</div>

						<DrinkResponsibly className={ "!text-white" }/>
					</div>
				</div>
			</div>
		</GooeyEffect>
	)
}
export default Sunday

