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

				<div className="relative inline-block -mt-15">
					<p className="text-sm sm:text-base tracking-[0.3em] uppercase text-bar-bambi-gold">
						Events
					</p>
					<p className="text-sm sm:text-base tracking-[0.3em] uppercase text-bar-bambi-gold wipe-overlay">
						Events
					</p>
				</div>
			</div>
		</a>
	)
}
export default Gif