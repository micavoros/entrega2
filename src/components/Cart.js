import React, { useState } from "react";

//funcion cart -fijo- 
function Cart () {
    const count = useState(0)
    return(
        <p>{count}</p>
    )
}
export default Cart;