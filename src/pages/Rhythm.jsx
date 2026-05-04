import HeaderNews from "../components/Header-News.jsx";
import Selectors from "../components/selectors.jsx";

const Rhythm = () => {
    return (
        <div className={"text-center"}>
            <HeaderNews title={"sunday bambi brunch"} />

            <div className={"paragraph-styles"}>
                <p>Welcome to Sunday Brunch at your favourite food and entertainment destination.</p>
                <p>Each Sunday, Bar Bambi hosts an exclusive brunch event with alternating special guests.</p>
                <p>From Rhythm N Brunch to Drag N Brunch, or even a slow Sunday afternoon session with celebrity guest chefs… We have it all covered.</p>
            </div>

            <HeaderNews title={"RHYTHM 'N Brunch"} hideImage={true} className={"py-15"}/>

            <div className={"paragraph-styles"}>
                <p>Welcome to Rhythm N Brunch at Bar Bambi, where the beats blend seamlessly with our Italian menu!</p>
                <p>Think DJs, dining and Spritz playing your favourite R’N’B singalongs all brunch long.</p>
            </div>

            <br/>
            <br/>

            <h1 className={"paragraph-styles text-2xl "}><p>Sunday 8th June</p></h1>
            <Selectors title={"Book now"} className={"my-10"}/>

            <h1 className={"paragraph-styles text-2xl"}><p>Sunday 2nd November</p></h1>
            <Selectors title={"Book now"} className={"mt-10 mb-30"}/>
        </div>
    )
}
export default Rhythm
