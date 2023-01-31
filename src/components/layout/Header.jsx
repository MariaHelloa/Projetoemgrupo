import styles from './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/">Home</Link>
            </li>

            <li className={styles.item}>
                <Link to="/catalogo">Catalogo</Link>
            </li>

            <li className={styles.item}>
                <Link to="/unidade">Unidade</Link>
            </li>

            <li className={styles.item}>
                <Link to="/Login">Login</Link>
            </li>

        </ul>
    )
}

export default Header