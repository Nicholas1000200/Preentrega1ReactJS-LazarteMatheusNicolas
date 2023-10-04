import { useState } from "react";

export const ItemCount = ({stock,initial,onAdd}) => {
    const [quantity,setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="boton" onClick={decrement}>-</button>
                <h4 className="numero">{quantity}</h4>
                <button className="boton" onClick={increment}>+</button>
            </div>
            <button className="boton" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    )
}