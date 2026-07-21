const HeaderNews = ({title, hideImage = false, className = "",}) => {
    return (
        <div className={"flex flex-col items-center mb-5 justify-center w-full sm:w-[612px] space-y-4 mx-auto"}>
            {!hideImage && (
                <a href={"/"}>
                    <img
                        src={"/logo.svg"}
                        className={"w-full hover:scale-[1.05] transition-transform duration-500 ease-in-out "}
                        alt={"header-logo"}
                    />
                </a>
            )}

            <div
                className={`${className} text-bar-bambi-gold font-unique uppercase flex items-center justify-center text-center font-[500px] py-6 text-4xl `}
            >
                {title}
            </div>
        </div>
    )
}
export default HeaderNews
