import { Link } from 'react-router-dom'
import "./Navbar.css";

export default function Navbar(){
    return (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Recipe Store</div>
        <Link to="/" className='navbar__item'>Home</Link>
        <Link to="/add-recipe" className='navbar__item'>Add Recipe</Link>
    </header>
    )
  }




