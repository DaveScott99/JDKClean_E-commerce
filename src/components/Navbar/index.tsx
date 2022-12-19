import { Link } from 'react-router-dom';
import './styles.css';

export default function Navbar() {
    return (
        <nav className="main-navbar">
            <Link to="/" className='logo-text'>JDKClean</Link>
        </nav>
    );
}
