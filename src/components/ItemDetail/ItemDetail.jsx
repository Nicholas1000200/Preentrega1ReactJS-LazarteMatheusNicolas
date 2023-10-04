import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ({ id,name,img,category,description,price,stock}) =>{
    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p>
                    Categoria:{category}
                </p>
                <p>
                    Descripcion:{description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log}/>
            </footer>
        </article>
    )
}