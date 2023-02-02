import styles from './CartLogo.module.scss';

import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import { useSelector } from 'react-redux';

function CartLogo() {
    const { totalCount, totalPrice } = useSelector((state) => state.cartReducer);

    return (
        <Link className={styles.background_logo} to="/cart">
            <FiShoppingCart className={styles.logo} />
            {totalCount > 0 && <div className={styles.logo__notification}>{totalCount}</div>}
            <div className={styles.total_price}>{totalPrice} ₽</div>
        </Link>
    );
}

export default CartLogo;
