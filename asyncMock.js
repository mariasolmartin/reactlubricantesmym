const products = [
    {
        id: '1',
        name: 'helix ultra 5w30',
        price: 18000,
        category: 'lubricantes',
        img: helixultraprofesional5w30.jpg,
        stock: 6,
        descripcion: lubricantes100%sinteticorecomiendaFORD,
    },

    {id: '2', name: 'helix hx8 5w40', price: 20500, category: 'lubricantes', img: 'shell-helix-hx8-professional-av-5w-40.png', stock:5, descripcion: 'lubricantes 100% sintetico vw',},
    {id: '3', name: 'helix hx7 10w40', price: 10500, category: 'lubricantes', img: 'hx7.jpg', stock:8, descripcion: 'lubricantes semi-sintetico',},

]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500) 
    })
}
export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products,find(prod => prod.id === productId))
        }, 500)
    })
}