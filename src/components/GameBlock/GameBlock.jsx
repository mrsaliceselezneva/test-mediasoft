import styles from './GameBlock.module.scss';

import { FaCartPlus } from 'react-icons/fa';

function GameBlock(props) {
    return (
        <div
            className={styles.game_block}
            onClick={() =>
                window.location.assign(`${process.env.REACT_APP_URL}/game?id=${props.id}`)
            }>
            <img
                className={styles.game_block__img}
                src={props.img}
                alt={'здесь скоро будет изображение'}
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
