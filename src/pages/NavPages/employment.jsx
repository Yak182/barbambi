import HeaderNews from "@/components/Header-News.jsx";
import Selectors from "@/components/selectors.jsx";

const Employment = () => {
    return (
        <div className={"flex flex-col items-center"}>
            <HeaderNews title={"employment OPPORTUNITIES"} />
            <div className={"paragraph-styles"}>
                <p>GOOD TIMES AND EVEN BETTER COMPANY.</p>
                <p>WE’RE CURRENTLY LOOKING FOR:</p>
                <p>- CHEFS</p>
                <p>- MIXOLOGISTS</p>
                <p>- BAR STAFF</p>
                <p>- WAIT STAFF</p>
            </div>

            <div className={"mt-10"}>
                <Selectors title={"Apply Now"} />
            </div>

        </div>
    )
}
export default Employment
