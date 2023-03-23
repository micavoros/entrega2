import React from "react";
import { useState } from "react";
import '../App.css';


const ItemCount = ({stockItems}) => {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        } 
    }

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        }
        
    }

    const onAdd = () => {
        if (count <= stock){
            setStock(stock - count);
            setCount(1);
        }

    }

    return(
        <div className="container-counter mx-auto">
            <div className="row mb-3 ">
                <div className="col-md-2 mx-auto">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary counter" onClick={decrease} >-</button>
                        <button type="button" className="btn btn-outline-primary counter">{count} </button>
                        <button type="button" className="btn btn-outline-primary counter" onClick={increase} >+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 mx-auto">
                    <button type="button" className="btn btn-outline add" onClick={onAdd}>Agregar al carrito</button>    
                </div>

            </div>

        </div>
    )
}
export default ItemCount;