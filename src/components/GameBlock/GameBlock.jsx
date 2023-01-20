import styles from './GameBlock.module.scss';

import { FaCartPlus } from 'react-icons/fa';

function GameBlock(props) {
    return (
        <div className={styles.game_block}>
            <img
                className={styles.game_block__img}
                src={props.img}
                alt={'здесть скоро будет изображение'}
            />
            <div className={styles.game_block__title}>{props.name}</div>
            <div className={styles.game_block__price}>
                <FaCartPlus className={styles.game_block__price__add_cart} />
                {props.price} ₽
            </div>
        </div>
    );
}

export default GameBlock;
