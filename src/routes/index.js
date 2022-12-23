import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contatos from "../pages/Contatos";
import Download from "../pages/Download";
import Home from "../pages/Home";
import Tutorial from "../pages/Tutorial";

const Rotas = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tutorial" element={<Tutorial/>}/>
                <Route path="/download" element={<Download/>}/>
                <Route path="/contatos" element={<Contatos/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;