import { link } from "react-router-dom"

const Item = ({id, name, img, price, }) => {
    return(
        <article className='CardItem'>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
            
            </section>
            <footer>
                <link to={'/Item/${id}'}>Ver Producto</link>
            </footer>

        </article>
    )
}

export default Item