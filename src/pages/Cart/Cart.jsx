import styles from './Cart.module.scss';

function Cart() {
    return (
        <div className={styles.cart}>
            <div className={styles.cart__empty}>
                <div className={styles.cart__empty__text}>Корзина пуста</div>
                <div className={styles.cart__empty__text}>Выберите игры и возвращайтесь</div>
                <a href="/">
                    <button className={styles.cart__empty__button}>За покупками</button>
                </a>
            </div>
            <div className={styles.cart__fill}></div>
        </div>
    );
}

export default Cart;
