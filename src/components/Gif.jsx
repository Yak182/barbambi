const Gif = ({className = ""}) => {
	return (
		<a href={"/"}>
			<div className="hover-wipe transition-transform duration-500 ease-in-out hover:scale-105 flex flex-col items-center justify-center w-full sm:w-[612px] space-y-4 mx-auto">
				<img
					src="/BarBambi_WebsiteLogoAnimation_v2.gif"
					className={`${className} w-full transition-transform  ease-in-out`}
					alt="main logo"
				/>
				<img
					src="/BarBambi_WebsiteLogoAnimation_v2.gif"
					className={`${className} wipe-overlay`}
					alt=""
					aria-hidden="true"
				/>
			</div>
		</a>
	)
}
export default Gif
