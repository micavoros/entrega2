import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProducts from "./json/arrayProducts.json"
import ItemList from "./ItemList";


const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams ();

    useEffect(() => {
        const  promise = new Promise((resolve) => {
             setTimeout(() => {
                resolve(id ? arrayProducts.filter(item => item.category === id) : arrayProducts)
            }, 1000)
        });

        promise.then((data) => {
            setItem(data)

        })
    },[id]);

    return (
        <div className="container">
            <div className="row">
                <ItemList item={item} />
            </div>
      
        </div>       
    )
}

export default ItemListContainer;