import styles from './Game.module.scss';

import { setFilter } from '../../redux/slices/filterSlice';

import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { SearchContext } from '../../App';
import React, { useContext, useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../../redux/slices/cartSlice';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size[0];
}

function Game() {
    const dispatch = useDispatch();
    const { openGame } = useSelector((state) => state.gameReducer);
    const addedCart = useSelector((state) =>
        state.cartReducer.items.find((obj) => obj.id === openGame.id),
    );

    const { setSearchValue } = useContext(SearchContext);
    const width = useWindowSize();

    if (width > 1030)
        return (
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <div className={styles.name__title}>{openGame.name}</div>
                </div>
                <div className={styles.game}>
                    <div className={styles.game__body}>
                        <img
                            className={styles.game__body__img}
                            src={openGame.img}
                            alt={'здесь скоро будет изображение'}
                        />
                        <div className={styles.title}>Описание</div>
                        <div className={styles.game__body__description}>{openGame.description}</div>
                    </div>
                    <div className={styles.game__side}>
                        <div className={styles.title}>Добавить в корзину</div>
                        {addedCart ? (
                            <Link to="/cart" className={styles.game__side__to_cart}>
                                В корзину
                            </Link>
                        ) : (
                            <div
                                className={styles.game__side__price}
                                onClick={() => {
                                    dispatch(addItem(openGame));
                                }}>
                                <FaCartPlus className={styles.game__side__price__add_cart} />
                                {openGame.price} ₽
                            </div>
                        )}
                        <div className={styles.title}>Категории</div>
                        <div className={styles.game__side__categories}>
                            {openGame.category.map((element, id) =>
                                element !== 'Все' ? (
                                    <Link
                                        to="/"
                                        key={element}
                                        className={styles.game__side__categories__category}
                                        onClick={() => {
                                            setSearchValue('');
                                            dispatch(setFilter(element));
                                        }}>
                                        {element}
                                    </Link>
                                ) : null,
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    else
        return (
            <div className={styles.wrapper}>
                <div className={styles.name}>
                    <div className={styles.name__title}>{openGame.name}</div>
                    {addedCart ? (
                        <Link to="/cart" className={styles.game__side__to_cart}>
                            В корзину
                        </Link>
                    ) : (
                        <div
                            className={styles.game__side__price}
                            onClick={() => {
                                dispatch(addItem(openGame));
                            }}>
                            <FaCartPlus className={styles.game__side__price__add_cart} />
                            {openGame.price} ₽
                        </div>
                    )}
                </div>
                <div className={styles.game}>
                    <div className={styles.game__body}>
                        <img
                            className={styles.game__body__img}
                            src={openGame.img}
                            alt={'здесь скоро будет изображение'}
                        />
                        <div className={styles.title}>Категории</div>
                        <div className={styles.game__side__categories}>
                            {openGame.category.map((element, id) =>
                                element !== 'Все' ? (
                                    <Link
                                        to="/"
                                        key={element}
                                        className={styles.game__side__categories__category}
                                        onClick={() => {
                                            setSearchValue('');
                                            dispatch(setFilter(element));
                                        }}>
                                        {element}
                                    </Link>
                                ) : null,
                            )}
                        </div>
                        <div className={styles.title}>Описание</div>
                        <div className={styles.game__body__description}>{openGame.description}</div>
                    </div>
                </div>
            </div>
        );
}

export default Game;
