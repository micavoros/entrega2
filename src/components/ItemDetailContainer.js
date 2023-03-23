import React from "react";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import arrayProducts from "./json/arrayProducts.json";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve) => {
            console.log(id);
            setTimeout(() => {
                resolve(arrayProducts.find(item => item.id  === parseInt(id)))
            }, 1000);
        }, []);

        promise.then((data) => {
            setItem(data);
        })

    }, [id])


    return(
        
        <div className="container">
            <ItemDetail item={item} />
        </div> 

    )
}

export default ItemDetailContainer;