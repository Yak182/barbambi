export const mediaArr = [
    {
        key: 1,
        src: "https://web.archive.org/web/20250414155247im_/https://barbambi.com.au/uploads/items/1689553569kk6wze6pfyvurdjf7gu9rixuznehsk_thumb.jpg",
        title: "MELBOURNE'S SOCIAL SCENE IS BACK BY FIONA BYRNE (HERALD SUN)",
        href: "https://www.heraldsun.com.au/"
    },
    {
        key: 2,
        src: "https://web.archive.org/web/20250414155251im_/https://barbambi.com.au/uploads/items/1689553865g6o4y4is0c619lanq86xe0o8kmtqkx_thumb.jpg",
        title: "DELICIOUS",
        href: "https://www.delicious.com.au/eat-out/restaurants/article/bar-bambi-melbourne-opens-acdc-lane/1gi3kkme"
    },
    {
        key: 3,
        src: "https://web.archive.org/web/20250414155257im_/https://barbambi.com.au/uploads/items/1689553946dpt497rjij40kvabwctq3q1v825k8w_thumb.jpeg",
        title: "PAGE 13 - HERALD SUN.",
        href: "https://www.heraldsun.com.au/"
    },
    {
        key: 4,
        src: "https://media.timeout.com/images/105832059/1920/1080/image.webp",
        title: "TIME OUT SAYS: BAR BAMBI",
        href: "https://www.timeout.com/melbourne/restaurants/bar-bambi"
    },
    {
        key: 5,
        src: "https://web.archive.org/web/20250414155306im_/https://barbambi.com.au/uploads/items/1689554055k9rdljkd3vavtbwa36b4arf7027p2v_thumb.jpg",
        title: "BROADSHEET FIRST LOOK: THE GLAMOROUS BAR BAMBI BRINGS...",
        href: "https://www.broadsheet.com.au/"
    },
    {
        key: 6,
        src: "https://web.archive.org/web/20250414155310im_/https://barbambi.com.au/uploads/items/1689554164t6mkxz7c629tlmp1ska4zy8eneh861_thumb.jpg",
        title: "WHAT THE RUSSIANS DID NEXT",
        href: "#"
    },
    {
        key: 7,
        src: "https://web.archive.org/web/20250414155314im_/https://barbambi.com.au/uploads/items/1689554267bret15zg2rvwzijf4jkp61uuxaoi5f_thumb.jpeg",
        title: "WHAT THE RUSSIANS DID NEXT",
        href: "#"
    },
];



const MediaCard = ({ src, alt, href, title }) => {
    return (
        <div className={"flex flex-col gap-y-4 overflow-hidden items-center"}>
            <a href={href} target={"_blank"} rel="noreferrer">
                <img 
                    src={src}
                    alt={alt}
                    className={"w-50 h-50 hover:scale-110 transition-transform duration-500 ease-in-out  object-cover"}
                />
            </a>
            {title}
        </div>
    )
}
export default MediaCard
