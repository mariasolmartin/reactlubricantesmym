import { useEffect, useState } from "react"
import { getProducts } from '../asyncMock'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([false]);
    const { categoryId } = useParams();
    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [categoryId]);
    return (
        <div>
            <h1>{greeting}</h1>
            <div>
                <ItemList products={products} />
            </div>
        </div>
    );

}
export default ItemListContainer