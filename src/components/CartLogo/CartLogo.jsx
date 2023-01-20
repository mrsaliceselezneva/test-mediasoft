import styles from './CartLogo.module.scss';
import { FiShoppingCart } from 'react-icons/fi';

function CartLogo() {
    return (
        <a className={styles.background_cart_logo} href={`${process.env.REACT_APP_URL}/cart`}>
            <FiShoppingCart className={styles.cart_logo} />
        </a>
    );
}

export default CartLogo;
