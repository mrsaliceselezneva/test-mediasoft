import styles from './Cart.module.scss';

import { Link } from 'react-router-dom';

function Cart() {
    return (
        <div className={styles.cart}>
            <div className={styles.cart__empty}>
                <div className={styles.cart__empty__text}>Корзина пуста</div>
                <div className={styles.cart__empty__text}>Выберите игры и возвращайтесь</div>
                <Link to="/">
                    <button className={styles.cart__empty__button}>За покупками</button>
                </Link>
            </div>
            <div className={styles.cart__fill}></div>
        </div>
    );
}

export default Cart;
