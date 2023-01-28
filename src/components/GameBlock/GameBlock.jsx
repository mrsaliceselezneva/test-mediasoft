import styles from './GameBlock.module.scss';

import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {
    setName,
    setImg,
    setDescription,
    setCategory,
    setId,
    setPrice,
} from '../../redux/slices/gameSlice';

function GameBlock(props) {
    const dispatch = useDispatch();

    return (
        <div
            className={styles.game_block}
            onClick={() => {
                dispatch(setName(props.name));
                dispatch(setImg(props.img));
                dispatch(setDescription(props.description));
                dispatch(setCategory(props.category));
                dispatch(setId(props.id));
                dispatch(setPrice(props.price));
            }}>
            <Link to="/game" className={styles.game_block__link}>
                <img
                    className={styles.game_block__img}
                    src={props.img}
                    alt={'здесь скоро будет изображение'}
                />
                <div className={styles.game_block__title}>{props.name}</div>
            </Link>
            <div className={styles.game_block__price}>
                <FaCartPlus className={styles.game_block__price__add_cart} />
                {props.price} ₽
            </div>
        </div>
    );
}

export default GameBlock;
