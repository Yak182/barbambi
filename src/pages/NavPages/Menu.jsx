import HeaderNews from "../../components/Header-News.jsx";
import Selectors from "../../components/selectors.jsx";
import GooeyEffect from "@/components/GooeyEffect/index.jsx";

const Menu = () => {
    return (
		<GooeyEffect
			src={"/gradient-bg.png"}
			hoverSrc=""
			className="w-full min-h-screen overflow-hidden"
			childrenClassName="w-full "
		>
        <div>
			<HeaderNews title={"Raise a glass to... anyone"}/>
			<p className={"paragraph-styles"}>HERE’S WHAT WE’RE SERVING, SIPPING, AND SHARING SECRETS OVER.</p>

			<div className={"flex flex-col justify-center items-center my-10"}>
				<div className={"flex flex-col items-center gap-y-10"}>
					<Selectors title={"Dining Menu"} href={"https://barbambi.com.au/uploads/items/1777963746q4ihsstr78tm55hbfqq7t0y1lxxoyq.pdf"} target={"_blank"}/>
					<Selectors title={"Set menu for 9+ guests"} href={"https://barbambi.com.au/uploads/items/1777963776sw500bwp850ewwpwmzei8l0gyotmto.pdf"} target={"_blank"}/>
					<Selectors title={"Bar menu"} href={"https://barbambi.com.au/uploads/items/1784684727bfixu4yv9qndqgp7d7i8gy8qgkzld4.pdf"} target={"_blank"}/>
					<Selectors title={"Bottomless pasta menu"} href={"https://barbambi.com.au/uploads/items/1782786523k9oiwkdyqzwo5unyhsi10ynahy65c1.pdf"} target={"_blank"}/>
					<Selectors title={"Late night menu"} href={"https://barbambi.com.au/uploads/items/1784684394s8t6w4h5ky3bmom8vvjk8o7fz311am.pdf"} target={"_blank"}/>
				</div>
			</div>
        </div>
		</GooeyEffect>
    )
}
export default Menu
