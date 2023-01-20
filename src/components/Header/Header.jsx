import styles from './Header.module.scss';

import Search from '../Search/Search';
import CartLogo from '../CartLogo/CartLogo';

function Header() {
    return (
        <div className={styles.header}>
            <a className={styles.header__logo} href="/">
                <img className={styles.header__logo__img} src="img/dragon.png" alt="logo" />
                Подстолки
            </a>
            <Search />
            <CartLogo />
        </div>
    );
}

export default Header;
