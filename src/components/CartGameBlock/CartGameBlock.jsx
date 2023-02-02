import styles from './CartGameBlock.module.scss';

import { FiMinusCircle, FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { useState, useLayoutEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem, clearItem } from '../../redux/slices/cartSlice';

import CartClearModal from '../CartClearModal/CartClearModal';

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

function CartGameBlock(props) {
    const [showCartClearModal, setShowCartClearModal] = useState(false);

    const dispatch = useDispatch();
    const game = useSelector((state) => state.cartReducer.items.find((obj) => obj.id === props.id));

    const width = useWindowSize();

    if (width > 1030)
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
                        <div className={styles.game_block__wrapper__count__number}>
                            {game.count}
                        </div>
                        <FiPlusCircle
                            className={styles.game_block__wrapper__count__icon}
                            onClick={() => {
                                dispatch(addItem({ id: game.id }));
                            }}
                        />
                    </div>
                    <div className={styles.game_block__wrapper__price}>
                        {game.price * game.count} ₽
                    </div>
                    <FiXCircle
                        className={styles.game_block__wrapper__iconx}
                        onClick={() => {
                            setShowCartClearModal(true);
                        }}
                    />
                </div>
            </div>
        );
    else
        return (
            <div className={styles.game_block_little}>
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
                    className={styles.game_block_little__img}
                    src={game.img_cart}
                    alt={'здесть скоро будет изображение'}
                />
                <div className={styles.game_block_little__wrapper}>
                    <div className={styles.game_block_little__wrapper__title}>{game.name}</div>
                    <div className={styles.game_block_little__wrapper__price}>{game.price} ₽</div>
                    <div className={styles.game_block_little__wrapper__count}>
                        <FiMinusCircle
                            className={styles.game_block_little__wrapper__count__icon}
                            onClick={() => {
                                game.count > 1
                                    ? dispatch(deleteItem(game))
                                    : setShowCartClearModal(true);
                            }}
                        />
                        <div className={styles.game_block_little__wrapper__count__number}>
                            {game.count}
                        </div>
                        <FiPlusCircle
                            className={styles.game_block_little__wrapper__count__icon}
                            onClick={() => {
                                dispatch(addItem({ id: game.id }));
                            }}
                        />
                    </div>
                </div>
                <FiXCircle
                    className={styles.game_block_little__wrapper__iconx}
                    onClick={() => {
                        setShowCartClearModal(true);
                    }}
                />
            </div>
        );
}

export default CartGameBlock;
