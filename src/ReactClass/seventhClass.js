import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import SixthClass from "./sixthClass"
import Fifthclass from "./fifthclass"

export default function SeventhClass() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello React Router Dom</h1>} />
                <Route path="/apidata" element={<SixthClass />} />
                <Route path="/api" element={<Fifthclass/>} />
            </Routes>
        </BrowserRouter>

    )
}
