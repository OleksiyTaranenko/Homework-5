import { NavLink } from "react-router-dom";
import './Menu.css'

function Menu() {
    return (
        <div className="menu">
            <p className='storeName'>Good shop</p>
            <nav>
                <ul>
                    <li><NavLink to="/" exact>Main</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                </ul>
            </nav>
            <p className='basket'></p>
        </div>
    );
}

export default Menu;