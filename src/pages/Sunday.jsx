import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import DrinkResponsibly from "../components/drink-responsibly.jsx";

const Sunday = () => {
    return (
        <div className={"text-center"}>
            <HeaderNews title={"Sunday Sessions"} />

            <div className={"paragraph-styles"}>
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

            <div className={"paragraph-styles text-xl"}>
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

            <DrinkResponsibly />
        </div>
    )
}
export default Sunday

