import HeaderNews from "../../components/Header-News.jsx";
import Selectors from "../../components/selectors.jsx";

const Menu = () => {
    return (
        <div>

                <HeaderNews title={"Raise a glass to... anyone"}/>
                <p className={"paragraph-styles"}>HERE’S WHAT WE’RE SERVING, SIPPING, AND SHARING SECRETS OVER.</p>

                <div className={"flex flex-col justify-center items-center my-10"}>
                    <div className={"flex flex-col items-center gap-y-10"}>
                        <Selectors title={"Thursday - pinot & pasta menu"}/>
                        <Selectors title={"Thursday - bottomless pasta party menu"}/>
                        <Selectors title={"Bar menu"}/>
                        <Selectors title={"dining menu"}/>
                        <Selectors title={"set menu (for 9+ guests)"}/>
                        <Selectors title={"bottle service menu "}/>
                    </div>
                </div>

        </div>
    )
}
export default Menu
