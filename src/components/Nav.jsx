import {useState} from "react";
import { Menu, X } from 'lucide-react'
import {Link} from "react-router-dom";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/upcoming", label: "UPCOMING EVENTS" },
        { to: "/open-hours", label: "open hours" },
        { to: "/reservations", label: "reservations" },
        { to: "/menu", label: "menu" },
        { to: "/functions", label: "functions, events & private dining" },
        { to: "/contact", label: "contact" },
        { to: "/media", label: "media" },
        { to: "/employment", label: "employment opportunities" },
        { to: "/t&cs", label: "terms and conditions" },
    ];

    return (
			<nav className={"relative"}>
				<div className={"text-lg text-white text-center p-4 px-4 flex justify-between items-center relative z-[70] backdrop-blur-md border-b border-slate-900/5 shadow-sm  "}>
					<div>
						<a href={"/"} className={"align-middle size-1"}>
							<img src="/favicon.svg" alt={"logo"} className={"w-7 transition-transform duration-300 ease-in-out hover:scale-110 "}/>
						</a>
					</div>

					<div className={""}>
						<button onClick={toggleMenu} className={"focus:outline-none"}>
							{isMenuOpen ? (
								<X className={"text-bar-bambi-gold size-8 "}/>
							) : (
								<Menu className={"text-bar-bambi-gold size-8 "}/>
							)}
						</button>
					</div>
				</div>

				{isMenuOpen && (
					<div className={"fixed inset-0 bg-black/90 z-[60] flex flex-col items-center justify-start pt-24 space-y-4 text-white text-2xl font-unique transition-all duration-300 ease-in-out"}>
						{navLinks.map((link, index) => (
							<Link
								key={link.to}
								to={link.to}
								onClick={toggleMenu}
								className={`hover:text-[#5E0D2C] transition-all hover:scale-109 uppercase opacity-0 animate-fly-in`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</nav>
    )
}
export default Nav
