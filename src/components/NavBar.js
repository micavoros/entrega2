import React from "react";
import Cart from "./Cart";
import CartWidget from "./CartWidget";

//bootstrap navbar
function NavBar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Hoodiland</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#">Productos</a>
                <a class="nav-link" href="#">Tu cuenta</a>
                <a class="nav-link nav-link-carrito" href="#"><CartWidget/><Cart/></a>
            </div>
            </div>
            </div>
        </nav>
        </>
    )
}
export default NavBar;

// //bootstrap cart
// const CartWidget= () => {
//     return (
//     <i className="bi bi-bag"></i>
//     );
// }

// //funcion cart -fijo- 
// function Cart () {
//     const count = useState(0)
//     return(
//         <p>{count}</p>
//     )
// }
