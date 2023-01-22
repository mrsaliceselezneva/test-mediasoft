import styles from './NotFound.module.scss';

import { Link } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <div className={styles.notfound_text}>Ничего не найдено :(</div>
            <Link to="/">
                <button className={styles.notfound__button}>
                    <FaHome className={styles.notfound__button__fahome} />
                    На главную
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
