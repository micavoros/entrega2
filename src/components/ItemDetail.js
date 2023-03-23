import React from "react";
import ItemCount from "../components/ItemCount";
import '../App.css';


const ItemDetail = ({item}) => {
    return (
             <div className="row detail" id="itemdetail">
                 <div className="col-md-4 offset-md-4">
                    <img src={item.image} className="img-fluid" alt={item.name} />
                     <h1>{item.name}</h1>
                     <p>{item.description}</p>
                     <p>{item.price} </p>
                 </div>
                 <div className="detail-counter">
                 <ItemCount stockItems={10} />
                 </div>
             </div>    
    )
}
export default ItemDetail;