const products = [
    {
        id: '1',
        name: 'helix ultra 5w30',
        price: 18000,
        category: 'lubricantes',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/987/204/products/helix-ultra-profesional-5w30-af-4l1-ae164556eeaa92122716197174804418-480-0.jpg',
        
    },

    {id: '2', 
    name: 'helix hx8 5w40', 
    price: 20500, 
    category: 'lubricantes', 
    img: 'https://urquizamotos.com.ar/105561-large_default/aceite-shell-sintetico-helix-hx8-5w-40-4l-auto-motor-diesel.jpg'
},
    {id: '3', 
    name: 'filtro de aire honda city', 
    price: 3500, 
    category: 'filtros', 
    img: 'https://lubricentroorozco.com.ar/wp-content/uploads/2022/02/ca10650.jpg', 
    },
    {id: '4',
    name: 'filtro de aceite fiat siena',
    price: 1500,
    category: 'filtros',
    img: 'https://http2.mlstatic.com/D_NQ_NP_685390-MLA31805641213_082019-O.webp',    
    },
    {id: '5',
    name: 'bateria mateo 12x65',
    price: 28.000,
    category: 'baterias',
    img: 'https://http2.mlstatic.com/D_NQ_NP_674838-MLA31344412758_072019-O.jpg',
},

{id: '6',
name: 'bateria mateo 12x75',
price: 32.000,
category: 'baterias',
img: 'https://http2.mlstatic.com/D_NQ_NP_672524-MLA47752300533_102021-O.webp'

},

]
export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500) 
    })
}
export const getProductsById = (productId) => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(products.find((prod) => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (productCategory) => {
    return new Promise ( (resolve) => {
        setTimeout( () => {
            resolve(products.filter(product => product.category === productCategory))
        }, 1000)
    })
}