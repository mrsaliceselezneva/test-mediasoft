import styles from './Search.module.scss';
import { FiSearch } from 'react-icons/fi';

function Search() {
    return (
        <form className={styles.search}>
            <input className={styles.search__input} type="search" placeholder="Поиск..." />
            <div className={styles.search__background_fisearch}>
                <FiSearch className={styles.search__background_fisearch__fisearch} />
            </div>
        </form>
    );
}

export default Search;
