import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import {Routes, Route} from "react-router-dom";
import BookNow from "./pages/BookNow.jsx";
import PastaParty from "./pages/Pasta-party.jsx";
import Sunday from "./pages/Sunday.jsx";
import Upcoming from "./pages/upcoming.jsx";
import Menu from "./pages/NavPages/Menu.jsx";
import FunctionsEventsPrivate from "./pages/NavPages/functions-events-private.jsx";
import Contact from "@/pages/NavPages/Contact.jsx";
import Media from "@/pages/NavPages/media.jsx";
import Employment from "@/pages/NavPages/employment.jsx";
import TCs from "@/pages/NavPages/t&cs.jsx";
import FridaysLive from "@/pages/FridaysLive.jsx";
import Saturday from "@/pages/Saturday.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import HomePageV2 from "@/pages/HomePagev2.jsx";
import About from "@/pages/NavPages/About.jsx";
import Hours from "@/pages/NavPages/Hours.jsx";
import HomePageV3 from "@/pages/HomePageV3.jsx";

function App() {
    return (
        <main className='flex flex-col min-h-screen '>
            <CustomCursor />
            <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/book-now" element={<BookNow />} />
                    <Route path={"/thursday-pasta-party"} element={<PastaParty />} />
                    <Route path={"/Fridays-Live"} element={<FridaysLive />} />
                    <Route path={"/Saturday-Dinner-and-Disco"} element={<Saturday />} />
                    <Route path={"/sunday-sessions"} element={<Sunday />} />
                    <Route path={"/upcoming"} element={<Upcoming />} />
                    <Route path={"/menu"} element={<Menu />} />
                    <Route path={"/functions"} element={<FunctionsEventsPrivate />} />
                    <Route path={"/contact"} element={<Contact />}/>
                    <Route path={"/media"} element={<Media />}/>
                    <Route path={"/employment"} element={<Employment />}/>
                    <Route path={"/t&cs"} element={<TCs />}/>
                    <Route path={"/concept-1"} element={<HomePageV2 />}/>
                    <Route path={"/concept-2"} element={<HomePageV3 />}/>
                    <Route path={"/about"} element={<About />}/>
                    <Route path={"/open-hours"} element={<Hours />}/>
                </Routes>
            <Footer />

        </main>
    )
}


export default App