import './Navbar.css';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <header>
            <nav>
                <section>
                    <Link to='/'>
                        <p>Star Wars Merch</p>
                    </Link>
                </section>
                <section>
                    <ul>
                        <NavLink to={`/category/funko`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Funko</NavLink>
                        <NavLink to={`/category/lego`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Lego</NavLink>
                        <NavLink to={`/category/accesorios`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                    </ul>
                </section>
                <section>
                    <CartWidget />
                </section>
            </nav>
        </header>
    )
}