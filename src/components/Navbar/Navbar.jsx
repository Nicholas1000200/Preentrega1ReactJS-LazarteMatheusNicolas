import './Navbar.css';
import  {CartWidget} from '../CartWidget/CartWidget.jsx';
export const Navbar = () => {
    return (
        <header>
            <nav>
                <section>
                    <p>Star Wars Merch</p>
                </section>
                <section>
                    <ul>
                        <li>Inicio</li>
                        <li>Categorias</li>
                        <li>Contacto</li>
                    </ul>
                </section>
                <section>
                    <CartWidget/>
                </section>
            </nav>
        </header>
    );
}