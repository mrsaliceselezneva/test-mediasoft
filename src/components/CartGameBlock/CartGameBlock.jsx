import styles from './CartGameBlock.module.scss';

import { FiMinusCircle, FiPlusCircle, FiXCircle } from 'react-icons/fi';
import { useState } from 'react';

function CartGameBlock(props) {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.game_block}>
            <img
                className={styles.game_block__img}
                src={props.img}
                alt={'здесть скоро будет изображение'}
            />
            <div className={styles.game_block__wrapper}>
                <div className={styles.game_block__wrapper__title}>{props.name}</div>
                <div className={styles.game_block__wrapper__price}>{props.price} ₽</div>
                <div className={styles.game_block__wrapper__count}>
                    <FiMinusCircle className={styles.game_block__wrapper__count__icon} />
                    <div className={styles.game_block__wrapper__count__number}>{count}</div>
                    <FiPlusCircle className={styles.game_block__wrapper__count__icon} />
                </div>
                <div className={styles.game_block__wrapper__price}>{props.price} ₽</div>
                <FiXCircle className={styles.game_block__wrapper__iconx} />
            </div>
        </div>
    );
}

export default CartGameBlock;
