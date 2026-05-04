
const Selectors = ({title, className = "", href}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} border hover:border-bar-bambi-gold rounded underline hover:no-underline uppercase bg-bar-bambi-gold p-2 hover:bg-transparent hover:text-bar-bambi-gold font-unique cursor-pointer items-center inline-block text-center`}
        >
            {title}
        </a>
    )
}
export default Selectors
