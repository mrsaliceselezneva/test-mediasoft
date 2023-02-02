import styles from './CartGameBlock.module.scss';

import { FiMinusCircle, FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, clearItem } from '../../redux/slices/cartSlice';

import CartClearModal from '../CartClearModal/CartClearModal';

function CartGameBlock(props) {
    const [showCartClearModal, setShowCartClearModal] = useState(false);

    const dispatch = useDispatch();
    const game = useSelector((state) => state.cartReducer.items.find((obj) => obj.id === props.id));
    // console.log(game);

    return (
        <div className={styles.game_block}>
            <CartClearModal
                title={'Вы точно хотите удалить товар?'}
                showCartClearModal={showCartClearModal}
                onClose={() => setShowCartClearModal(false)}
                clear={() => {
                    dispatch(clearItem(game));
                    setShowCartClearModal(false);
                }}
            />
            <img
                className={styles.game_block__img}
                src={game.img_cart}
                alt={'здесть скоро будет изображение'}
            />
            <div className={styles.game_block__wrapper}>
                <div className={styles.game_block__wrapper__title}>{game.name}</div>
                <div className={styles.game_block__wrapper__price}>{game.price} ₽</div>
                <div className={styles.game_block__wrapper__count}>
                    <FiMinusCircle
                        className={styles.game_block__wrapper__count__icon}
                        onClick={() => {
                            game.count > 1
                                ? dispatch(deleteItem(game))
                                : setShowCartClearModal(true);
                        }}
                    />
                    <div className={styles.game_block__wrapper__count__number}>{game.count}</div>
                    <FiPlusCircle
                        className={styles.game_block__wrapper__count__icon}
                        onClick={() => {
                            dispatch(addItem({ id: game.id }));
                        }}
                    />
                </div>
                <div className={styles.game_block__wrapper__price}>{game.price * game.count} ₽</div>
                <FiXCircle
                    className={styles.game_block__wrapper__iconx}
                    onClick={() => {
                        setShowCartClearModal(true);
                    }}
                />
            </div>
        </div>
    );
}

export default CartGameBlock;
