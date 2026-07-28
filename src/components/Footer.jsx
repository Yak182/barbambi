import {Link} from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import DashboardTune from '/audio/PianoMusic.mp3'
import {useRef} from "react";


const Footer = () => {
    const audioRef = useRef(new Audio(DashboardTune));

    function handleAudio() {
        const audio = audioRef.current
        audio.currentTime = 0;
        audio.play();
    }

    return (
        <footer className={"relative flex flex-col sm:flex-row mt-auto items-center sm:justify-between px-4 py-8 sm:py-4 gap-6 sm:gap-0 z-50 backdrop-blur-md border-b border-slate-900/5 shadow-sm"}>
            <div className={"flex flex-col gap-1 items-center sm:items-start sm:justify-start"}>
                <Link
                    to={"https://www.google.com/maps/place/Bar+Bambi/@-37.8156162,144.968832,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad643b82c379a77:0x5ef07bf935d92aab!8m2!3d-37.8156326!4d144.9709787?shorturl=1"}
                    target={"_blank"}
                    className={"flex underline font-bar-bambi text-base text-bar-bambi-gold"}
                >
                AC/DC LANE
                </Link>
                <Link
                    to={"https://www.google.com/maps/place/Bar+Bambi/@-37.8156162,144.968832,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad643b82c379a77:0x5ef07bf935d92aab!8m2!3d-37.8156326!4d144.9709787?shorturl=1"}
                    target={"_blank"}
                    className={"flex underline font-bar-bambi text-base text-bar-bambi-gold"}
                >
                    MELBOURNE VIC 3000
                </Link>
            </div>

            <div className={"flex flex-col items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:ml-[-10px]"}>
                <img
                    src={"/BambiCrown.png"}
                    alt={"BMC"}
                    className={" hover:scale-110 transition-transform duration-300 ease-in-out"}
                    onClick={handleAudio}
                />
            </div>

			<div className={"flex flex-col items-center sm:items-end sm:justify-end"}>
				<div className={"flex items-center sm:items-end sm:justify-end text-bar-bambi-gold underline font-bar-bambi gap-x-2"}>
					<Link
						  to={"https://www.instagram.com/barbambi_melbourne/?hl=en"}
						  target={"_blank"}
						  className={"flex hover:scale-109 mb-1"}
					>
						<FaInstagram className={"size-5"}/>
					</Link>
					<Link to={"https://www.facebook.com/BarBambiMelbourne1/"} target={"_blank"} className={"flex hover:scale-109 mb-1"} >
							<FaFacebook	className={"size-5"}/>
					</Link>
				</div>
				<div className={"flex flex-col items-center sm:items-end sm:justify-end text-bar-bambi-gold underline font-bar-bambi"}>
					<a
						href={"tel: +0370202691"}
					>
						(03) 7020 2691
					</a>
				</div>
			</div>

        </footer>
    )
}

export default Footer
