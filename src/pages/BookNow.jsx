import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";

const BookNow = () => {
    return (
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
    )
}
export default BookNow
