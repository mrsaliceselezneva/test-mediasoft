import './Search.scss';
import { FiSearch } from 'react-icons/fi';

function Search() {
    return (
        <form className="search">
            <input className="search__input" type="search" placeholder="Поиск..." />
            <div className="search__background-fisearch">
                <FiSearch className="search__background-fisearch__fisearch" />
            </div>
        </form>
    );
}

export default Search;
