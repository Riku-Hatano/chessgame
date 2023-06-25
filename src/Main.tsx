import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";
import End from "./pages/End";
import Start from "./pages/Start";
import Nopage from "./pages/Nopage";
import Layout from "./components/Layout";

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Start /></Layout>} />
                <Route path="/game" element={<Layout><Game /></Layout>} />
                <Route path="/end" element={<End />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;