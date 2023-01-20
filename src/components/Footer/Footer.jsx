import './Footer.scss';

import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegramPlane } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__info">
                <div className="footer__personal-info">
                    <div className="footer__personal-info__fio">Полувесов Артём Алексеевич</div>
                    <div className="footer__personal-info__phone">+7 (927) 807-07-27</div>
                </div>

                <a className="footer__background-icon" href="https://vk.com/ironart00">
                    <SlSocialVkontakte className="footer__background-icon__icon" />
                </a>
                <a className="footer__background-icon" href="https://t.me/Alice_Selezneva">
                    <FaTelegramPlane className="footer__background-icon__icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
