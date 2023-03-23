import React from "react";
import { Link } from "react-router-dom";
import '../App.css';


const Item = ({item}) =>{
    return (
        <Link to={"/item/" + item.id} className="text=decoration=none">
            <div className="container">
                <div className="card  border border-0">
                    <img src={item.image} className="card-img-top" alt={item.name} />
                    <div className="card-body text-center">
                        <p className="card-text">{item.name}</p>
                        <p className="card-text">{item.price}</p>
                        <button type="button" className="btn btn-outline add button-detail" onClick={item.onAdd}>Agregar al carrito</button>  
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default Item;