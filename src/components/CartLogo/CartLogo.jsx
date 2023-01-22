import styles from './CartLogo.module.scss';

import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

function CartLogo() {
    return (
        <Link className={styles.background_logo} to={`${process.env.REACT_APP_URL}/cart`}>
            <FiShoppingCart className={styles.logo} />
        </Link>
    );
}

export default CartLogo;
