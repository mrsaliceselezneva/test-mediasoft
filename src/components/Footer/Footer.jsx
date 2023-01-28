import styles from './Footer.module.scss';

import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegramPlane } from 'react-icons/fa';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__info}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__wrapper__personal_info}>
                        <div className={styles.footer__wrapper__personal_info__fio}>
                            Полувесов Артём Алексеевич
                        </div>
                        <div className={styles.footer__wrapper__personal_info__phone}>
                            +7 (927) 807-07-27
                        </div>
                    </div>

                    <a
                        className={styles.footer__wrapper__background_icon}
                        href="https://vk.com/ironart00">
                        <SlSocialVkontakte
                            className={styles.footer__wrapper__background_icon__icon}
                        />
                    </a>
                    <a
                        className={styles.footer__wrapper__background_icon}
                        href="https://t.me/Alice_Selezneva">
                        <FaTelegramPlane
                            className={styles.footer__wrapper__background_icon__icon}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
