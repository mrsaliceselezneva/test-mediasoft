import styles from './Game.module.scss';

import { setFilter } from '../../redux/slices/filterSlice';

import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { SearchContext } from '../../App';
import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Game() {
    const { setSearchValue } = useContext(SearchContext);

    const { name, img, description, category, id, price } = useSelector(
        (state) => state.gameReducer,
    );
    const dispatch = useDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>
                <div className={styles.name__title}>{name}</div>
            </div>
            <div className={styles.game}>
                <div className={styles.game__body}>
                    <img
                        className={styles.game__body__img}
                        src={img}
                        alt={'здесь скоро будет изображение'}
                    />
                    <div className={styles.title}>Описание</div>
                    <div className={styles.game__body__description}>{description}</div>
                </div>
                <div className={styles.game__side}>
                    <div className={styles.title}>Добавить в корзину</div>
                    <div className={styles.game__side__price}>
                        <FaCartPlus className={styles.game__side__price__add_cart} />
                        {price} ₽
                    </div>
                    <div className={styles.title}>Категории</div>
                    <div className={styles.game__side__categories}>
                        {category.map((element, id) =>
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
}

export default Game;
