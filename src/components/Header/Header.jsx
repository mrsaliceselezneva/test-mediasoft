import './Header.scss';
import logo from '../assets/img/logo.png';

import Search from '../Search/Search';
import CartLogo from '../CartLogo/CartLogo';

function Header() {
    return (
        <div className="header">
            <a href="/">
                <img className="logo" src={logo} alt={'logo'} />
            </a>
            <Search />
            <CartLogo />
        </div>
    );
}

export default Header;
