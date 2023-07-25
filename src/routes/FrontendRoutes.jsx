import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Expense from "../pages/Expense";
import Income from "../pages/Income";
import NotFound from "../pages/NotFound";

function FrontendRoutes() {
    return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/income" element={<Income />}/>
                        <Route path="/expense" element={<Expense />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
}

export default FrontendRoutes;