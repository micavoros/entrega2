import React from "react";
import Cart from "./Cart";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={"/"}>Hoodiland</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink class="nav-link" to={"/category/concapucha"}>Con capucha</NavLink>
                    <NavLink class="nav-link" to={"/category/sincapucha"}>Sin capucha</NavLink>
                    <NavLink class="nav-link nav-link-carrito" to={"/category/carrito"}><CartWidget/><Cart/></NavLink>
                </div>
                </div>
                </div>
            </nav>
        </>
    )
} 
export default NavBar;