import styles from './Header.module.scss';

import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search/Search';
import CartLogo from '../CartLogo/CartLogo';
import SidebarLogo from '../SidebarLogo/SidebarLogo';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size[0];
}

function Header() {
    const width = useWindowSize();

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__header}>
                {width > 1030 ? (
                    <Link className={styles.wrapper__header__logo} to="/">
                        <img
                            className={styles.wrapper__header__logo__img}
                            src="img/dragon.png"
                            alt="logo"
                        />
                        Подстолки
                    </Link>
                ) : (
                    <>
                        <SidebarLogo />
                        <Link to="/">
                            <img
                                className={styles.wrapper__header__logo__img}
                                src="img/dragon.png"
                                alt="logo"
                            />
                        </Link>
                    </>
                )}
                <Search />
                <CartLogo />
            </div>
        </div>
    );
}

export default Header;
