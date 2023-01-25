import styles from './Search.module.scss';

import { SearchContext } from '../../App';

import { useContext, useState } from 'react';

import { FiSearch } from 'react-icons/fi';

function Search() {
    const { setSearchValue } = useContext(SearchContext);
    const { innerWidth: winWidth } = window;

    const [search, setSearch] = useState('');
    if (winWidth > 1030)
        return (
            <form className={styles.search}>
                <input
                    onChange={(event) => setSearch(event.target.value)}
                    className={styles.search__input}
                    type="search"
                    placeholder="Поиск..."
                />
                <div className={styles.search__background_fisearch}>
                    <FiSearch
                        onClick={() => setSearchValue(search)}
                        className={styles.search__background_fisearch__fisearch}
                    />
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
