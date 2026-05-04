import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";
import DrinkResponsibly from "../components/drink-responsibly.jsx";

const PastaParty = () => {
    return (
        <div>
            <HeaderNews title={"Pasta Party"}/>
            <HeaderNews title={"every thursday - saturday"} hideImage={true}/>

            <div className={"paragraph-styles"}>
                <p className="text-xl md:text-3xl font-bold">$69PP</p>
                <p>all inclusive bowls & bubbles for 1.5hrs featuring</p>
                <p>A selection of Bambi’s famous pastas and salads</p>
                <p>+</p>
                <p>Beer, Wine, Prosecco & our supercharged Bambi Spritz selection</p>
            </div>

            <div className={"flex justify-center gap-5 py-4 mt-5  "}>
                <Selectors title={"see full menu here"} href={"https://barbambi.com.au/uploads/items/1754611870eqp6kj109afhmtew1npocej8ln9hu0.pdf"} />
            </div>
            <div className={"flex justify-center mt-10"}>
                <Selectors title={"Book now "} />
            </div>

            <DrinkResponsibly />
        </div>
    )
}
export default PastaParty
