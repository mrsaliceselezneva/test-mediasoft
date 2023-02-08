import styles from './GameBlock.module.scss';

import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { setOpenGame } from '../../redux/slices/gameSlice';
import { addItem } from '../../redux/slices/cartSlice';

function GameBlock(props) {
    const dispatch = useDispatch();
    const addedCart = useSelector((state) =>
        state.cartReducer.items.find((obj) => obj.id === props.id),
    );
    // const { totalCount, totalPrice, items } = useSelector((state) => state.cartReducer);

    return (
        <div
            className={styles.game_block}
            onClick={() => {
                dispatch(setOpenGame(props));
            }}>
            <Link to="/game" className={styles.game_block__link}>
                <img
                    className={styles.game_block__img}
                    src={props.img}
                    alt={'здесь скоро будет изображение'}
                />
                <div className={styles.game_block__title}>{props.name}</div>
            </Link>
            {addedCart ? (
                <Link to="/cart" className={styles.game_block__to_cart}>
                    В корзину
                </Link>
            ) : (
                <div
                    className={styles.game_block__price}
                    onClick={() => {
                        dispatch(addItem(props));
                    }}>
                    <FaCartPlus className={styles.game_block__price__add_cart} />
                    {props.price} ₽
                </div>
            )}
        </div>
    );
}

export default GameBlock;
