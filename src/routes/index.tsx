import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Http } from "../pages/Http";
import { Login } from "../pages/Login";

export const RouterStack = () => (
    <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/http" element={<Http/>} />
    </Routes>
)