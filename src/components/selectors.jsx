
const Selectors = ({title, className = "", href, target}) => {
    return (
        <a
            href={href}
            target={target}
            rel="noopener noreferrer"
            className={`${className} border border-white hover:border-bar-bambi-gold rounded text-black hover:no-underline uppercase bg-bar-bambi-gold p-2 hover:bg-transparent hover:text-bar-bambi-gold font-unique cursor-pointer items-center inline-block text-center shadow-[6px_6px_12px_0px_rgba(255,255,255,0.4)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none transition-all duration-150`}
        >
            {title}
        </a>
    )
}
export default Selectors
