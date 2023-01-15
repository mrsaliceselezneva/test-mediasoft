import './Search.scss';
import { FiSearch } from 'react-icons/fi';

function Search() {
    return (
        <form className="search">
            <input className="search-input" type="search" placeholder="Поиск..." />
            <div className="background-fisearch">
                <FiSearch className="fisearch" />
            </div>
        </form>
    );
}

export default Search;
