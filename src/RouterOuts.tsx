import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import Orders from "./Orders"

function RouterOuts() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterOuts