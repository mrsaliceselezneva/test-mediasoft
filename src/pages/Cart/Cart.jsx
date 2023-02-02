import styles from './Cart.module.scss';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';

import { RiDeleteBin6Line } from 'react-icons/ri';

import CartGameBlock from '../../components/CartGameBlock/CartGameBlock';

import CartClearModal from '../../components/CartClearModal/CartClearModal';

function Cart() {
    const [showCartClearModal, setShowCartClearModal] = useState(false);

    const dispatch = useDispatch();
    const { totalCount, totalPrice, items } = useSelector((state) => state.cartReducer);

    if (totalCount)
        return (
            <div className={styles.cart}>
                <CartClearModal
                    title={'Вы точно хотите очистить корзину?'}
                    showCartClearModal={showCartClearModal}
                    onClose={() => setShowCartClearModal(false)}
                    clear={() => {
                        dispatch(clearItems());
                        setShowCartClearModal(false);
                    }}
                />
                <div className={styles.cart__fill}>
                    <div className={styles.cart__fill__wrapper}>
                        <div
                            className={styles.cart__fill__wrapper__clear}
                            onClick={() => setShowCartClearModal(true)}>
                            Очистить корзину
                            <RiDeleteBin6Line className={styles.cart__fill__wrapper__clear__icon} />
                        </div>
                    </div>
                    {items.map((game) => (
                        <CartGameBlock key={game.name} id={game.id} />
                    ))}
                    <div>
                        <div className={styles.cart__fill__order_info}>
                            <div className={styles.cart__fill__order_info__summary}>
                                <div className={styles.cart__fill__order_info__summary__block}>
                                    Всего игр:
                                    <div
                                        className={
                                            styles.cart__fill__order_info__summary__block__num
                                        }>
                                        {totalCount}
                                    </div>
                                </div>
                                <div className={styles.cart__fill__order_info__summary__block}>
                                    Итого:
                                    <div
                                        className={
                                            styles.cart__fill__order_info__summary__block__num
                                        }>
                                        {totalPrice} ₽
                                    </div>
                                </div>
                            </div>
                            <button className={styles.cart__fill__order_info__order}>
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className={styles.cart}>
                <div className={styles.cart__empty}>
                    <div className={styles.cart__empty__text}>Корзина пуста</div>
                    <div className={styles.cart__empty__text}>Выберите игры и возвращайтесь</div>
                    <Link to="/" className={styles.cart__empty__link}>
                        <button className={styles.cart__empty__link__button}>За покупками</button>
                        <img
                            className={styles.cart__empty__link__img}
                            src="img/dragon_empty_cart.png"
                            alt="dragon_empty_cart"
                        />
                    </Link>
                </div>
            </div>
        );
}

export default Cart;
