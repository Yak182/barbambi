const HeaderNews = ({title, hideImage = false, className = "",}) => {
    return (
        <div className={"flex flex-col items-center justify-start mb-5"}>
            {!hideImage && (
                <img
                    src={"/logo.svg"}
                    className={"w-[30%]"}
                    alt={"header-logo"}
                />
            )}

            <div
                className={`${className} text-bar-bambi-gold font-unique uppercase flex items-center font-[500px] py-6 text-4xl `}
            >
                {title}
            </div>
        </div>
    )
}
export default HeaderNews
