import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
import {Routes, Route} from "react-router-dom";
import Reservations from "./pages/Reservations.jsx";
import PastaParty from "./pages/Pasta-party.jsx";
import Rhythm from "./pages/Rhythm.jsx";
import Sunday from "./pages/Sunday.jsx";
import Upcoming from "./pages/upcoming.jsx";
import Menu from "./pages/NavPages/Menu.jsx";
import FunctionsEventsPrivate from "./pages/NavPages/functions-events-private.jsx";
import Contact from "@/pages/NavPages/Contact.jsx";
import Media from "@/pages/NavPages/media.jsx";
import Employment from "@/pages/NavPages/employment.jsx";
import TCs from "@/pages/NavPages/t&cs.jsx";

function App() {
    return (
        <main className='flex flex-col min-h-screen bg-[url(/bgImage_2.png)] bg-cover bg-center bg-no-repeat xl:bg-fixed'>
            <Nav />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path={"/thursday-pasta-party"} element={<PastaParty />} />
                    <Route path={"/rhythm-n-brunch"} element={<Rhythm />} />
                    <Route path={"/sunday-lasagne-night"} element={<Sunday />} />
                    <Route path={"/upcoming"} element={<Upcoming />} />
                    <Route path={"/menu"} element={<Menu />} />
                    <Route path={"/functions"} element={<FunctionsEventsPrivate />} />
                    <Route path={"/contact"} element={<Contact />}/>
                    <Route path={"/media"} element={<Media />}/>
                    <Route path={"/employment"} element={<Employment />}/>
                    <Route path={"/t&cs"} element={<TCs />}/>
                </Routes>
            <Footer />
        </main>
    )
}


export default App