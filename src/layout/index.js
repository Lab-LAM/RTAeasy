import React from "react";
import Rotas from "../routes";
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";
import './layout.css';

const Layout = ()=>{
    return(
        <>
        <Navigation/>
        <div className="imagem"></div>
        <Rotas/>
        <Footer/>
        </>
    )
}

export default Layout;