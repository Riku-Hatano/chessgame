import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import End from "./pages/End";
import Start from "./pages/Start";
import Link from "./pages/Link";
import Nopage from "./pages/Nopage";




const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/game" element={<Game />} />
                <Route path="/end" element={<End />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;