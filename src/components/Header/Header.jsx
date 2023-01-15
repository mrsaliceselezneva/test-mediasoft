import './Header.scss';
import logo from '../assets/img/logo.png';

import Search from '../Search/Search';
import CartLogo from '../CartLogo/CartLogo';

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt={'logo'} />
            <Search />
            <CartLogo />
        </div>
    );
}

export default Header;
