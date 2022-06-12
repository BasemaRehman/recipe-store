import { Link } from 'react-router-dom'
import "./styles/Navbar.css";

export default function Navbar(){
    return (
        <div>
    <header data-testid='navbar-test' className='navbar'>
        <div className='navbar__title navbar__item'>Recipe Store</div>
        <Link to="/" className='navbar__item navbar__font'>Home</Link>
        <Link to="/add-recipe" state={{ unlocked: "" }} className='navbar__item navbar__font'>Add Recipe</Link>
    </header>
    </div>
    )
  }




