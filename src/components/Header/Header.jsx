import './Header.scss';

import Search from '../Search/Search';
import CartLogo from '../CartLogo/CartLogo';

function Header() {
    return (
        <div className="header">
            <a className="header__logo" href="/">
                <img className="header__logo__img" src="img/dragon.png" alt="logo" />
                Подстолки
            </a>
            <Search />
            <CartLogo />
        </div>
    );
}

export default Header;
