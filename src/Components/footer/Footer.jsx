import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            Build with 
            <FontAwesomeIcon icon={faHeart} className="footer-icon" aria-hidden="true"/> 
            by <a href="https://github.com/FelipeAAlbuquerque" target="_blank" rel="noreferrer">
                Felipe Albuquerque
            </a>
        </footer>
    );
}

export default Footer;