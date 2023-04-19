import CartWidget from "../CartWidget/CartWidget"
const NavBar = () =>{
    return(
        <nav>
            <h3>Lubricantes MyM</h3>
            <div>
            <button>LUBRICANTES</button>
            <button>FILTROS</button>
            <button>REFRIGERANTES</button>
            <button>ADITIVOS</button>
                
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar