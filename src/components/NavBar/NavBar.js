import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return(
        <div>
        <nav>
            <link to='/'>
            <h2>Lubricantes MyM</h2>
            </link>
            <NavLink to={'/category/lubricantes'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Lubricantes</NavLink>
            <NavLink to={'/category/filtros'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Filtros</NavLink>
            <NavLink to={'/category/baterias'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Baterias</NavLink>
            
                
            </nav>
            <CartWidget />
            </div>
        
    )
}

export default NavBar