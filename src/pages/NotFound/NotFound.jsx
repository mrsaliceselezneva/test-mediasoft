import styles from './NotFound.module.scss';

import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <div className={styles.notfound_text}>Ничего не найдено :(</div>
            <a href="/">
                <button className={styles.notfound__button}>
                    <FaHome className={styles.notfound__button__fahome} />
                    На главную
                </button>
            </a>
        </div>
    );
};

export default NotFound;
