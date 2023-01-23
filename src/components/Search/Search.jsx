import styles from './Search.module.scss';

import { FiSearch } from 'react-icons/fi';

function Search() {
    const { innerWidth: winWidth } = window;

    if (winWidth > 1030)
        return (
            <form className={styles.search}>
                <input className={styles.search__input} type="search" placeholder="Поиск..." />
                <div className={styles.search__background_fisearch}>
                    <FiSearch className={styles.search__background_fisearch__fisearch} />
                </div>
            </form>
        );
    else
        return (
            <div className={styles.background_fisearch2}>
                <FiSearch className={styles.fisearch2} />
            </div>
        );
}

export default Search;
