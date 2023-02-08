import styles from './Order.module.scss';

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../../redux/slices/cartSlice';

import MapBlock from '../../components/MapBlock/MapBlock';

import CardInfo from 'card-info';

import { YMaps } from '@pbe/react-yandex-maps';

function Order() {
    const dispatch = useDispatch();
    const { totalCount } = useSelector((state) => state.cartReducer);

    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const cardNumberRef = useRef(null);
    const cardDateRef = useRef(null);
    const cardCvcRef = useRef(null);
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');

    const [incorrectName, setIncorrectName] = useState(false);
    const [incorrectLastname, setIncorrectLastname] = useState(false);
    const [incorrectPhone, setIncorrectPhone] = useState(false);
    const [incorrectEmail, setIncorrectEmail] = useState(false);
    const [incorrectCardNumber, setIncorrectCardNumber] = useState(false);
    const [incorrectCardDate, setIncorrectCardDate] = useState(false);
    const [incorrectCardCvc, setIncorrectCardCVC] = useState(false);
    const [incorrectAddress, setIncorrectAddress] = useState(false);

    const [orderedSuccessfully, setOrderedSuccesfully] = useState(false);

    const [pathBankLogo, setPathBankLogo] = useState('');
    const [pathBrandLogo, setPathBrandLogo] = useState('');
    const lenPathBanksLogos = '/node_modules/card-info/dist/banks-logos/'.length;
    const lenPathBrandsLogos = '/node_modules/card-info/dist/brands-logos/'.length;
    const [bankColor, setBankColor] = useState('#c5e080');

    function normalizeText(value) {
        if (!value) return '';
        const val = value.replace(/[^а-яёА-ЯЁ]/u, '');
        if (val.length > 0) return val[0].toUpperCase() + val.slice(1).toLowerCase();
        return '';
    }

    function normalizePhone() {
        if (!phoneRef.current.value) return '';
        let val;
        if (phoneRef.current.value.length === 1) val = phoneRef.current.value.replace(/[^\d]/g, '');
        else val = phoneRef.current.value.replace(/[^\d]/g, '').slice(1);
        if (val.length < 4) return '+7 (' + val;
        if (val.length < 7) return `+7 (${val.slice(0, 3)}) ${val.slice(3)}`;
        return `+7 (${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
    }

    function normalizeCardNumber() {
        if (!cardNumberRef.current.value) return '';
        const val = cardNumberRef.current.value.replace(/[^\d]/g, '');
        var maskBank;
        if (val.length === 6) maskBank = val + '0000000000';
        if (val.length === 7) maskBank = val + '000000000';
        if (val.length === 8) maskBank = val + '00000000';
        if (val.length === 9) maskBank = val + '0000000';
        if (val.length === 10) maskBank = val + '000000';
        if (val.length === 11) maskBank = val + '00000';
        if (val.length === 12) maskBank = val + '0000';
        if (val.length === 13) maskBank = val + '000';
        if (val.length === 14) maskBank = val + '00';
        if (val.length === 15) maskBank = val + '0';
        if (val.length === 16) maskBank = val;

        var cardInfo = new CardInfo(maskBank, {
            banksLogosPath: '/node_modules/card-info/dist/banks-logos/',
            brandsLogosPath: '/node_modules/card-info/dist/brands-logos/',
        });
        if (cardInfo.bankName) {
            setPathBankLogo(cardInfo.bankLogoPng.slice(lenPathBanksLogos));
            setPathBrandLogo(cardInfo.brandLogoPng.slice(lenPathBrandsLogos));
            setBankColor(cardInfo.backgroundGradient);
        } else {
            setPathBankLogo('');
            setPathBrandLogo('');
            setBankColor('#c5e080');
        }
        if (val.length < 5) return val;
        if (val.length < 9) return `${val.slice(0, 4)} ${val.slice(4)}`;
        if (val.length < 13) return `${val.slice(0, 4)} ${val.slice(4, 8)} ${val.slice(8)}`;
        return `${val.slice(0, 4)} ${val.slice(4, 8)} ${val.slice(8, 12)} ${val.slice(12, 16)}`;
    }

    function normalizeCardDate() {
        if (!cardDateRef.current.value) return '';
        const val = cardDateRef.current.value.replace(/[^\d]/g, '');
        if (val.length < 3) return val;
        return `${val.slice(0, 2)}/${val.slice(2, 4)}`;
    }

    function normalizeCardCvc() {
        if (!cardCvcRef.current.value) return '';
        const val = cardCvcRef.current.value.replace(/[^\d]/g, '');
        return `${val.slice(0, 3)}`;
    }

    function checkEmail() {
        return !/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(emailRef.current.value);
    }

    function checkCardNumber() {
        if (cardNumberRef.current.value.length < 19) return false;
        const val =
            cardNumberRef.current.value.slice(0, 4) +
            cardNumberRef.current.value.slice(5, 9) +
            cardNumberRef.current.value.slice(10, 14) +
            cardNumberRef.current.value.slice(15, 19);
        return !/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(
            val,
        );
    }

    function checkCardDate() {
        const val = '1/' + cardDateRef.current.value;
        return !/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(
            val,
        );
    }

    function checkOrder() {
        if (nameRef.current.value.length < 2) setIncorrectName(true);
        if (lastnameRef.current.value < 2) setIncorrectLastname(true);
        if (phoneRef.current.value.length < 17) setIncorrectPhone(true);
        if (checkEmail()) setIncorrectEmail(true);
        if (checkCardNumber()) setIncorrectCardNumber(true);
        if (checkCardDate()) setIncorrectCardDate(true);
        if (cardCvcRef.current.value.length < 3) setIncorrectCardCVC(true);
        if (!street) setIncorrectAddress(true);
        if (!house) setIncorrectAddress(true);
        if (
            !incorrectName &&
            !incorrectLastname &&
            !incorrectPhone &&
            !incorrectEmail &&
            !incorrectCardNumber &&
            !incorrectCardDate &&
            !incorrectCardCvc &&
            !incorrectAddress
        ) {
            setOrderedSuccesfully(true);
            dispatch(clearItems());
        }
    }

    if (totalCount)
        return (
            <div className={styles.wrapper}>
                <form className={styles.order}>
                    <div className={styles.order__personal}>
                        <div className={styles.title}>Контактные данные</div>
                        <div className={incorrectLastname ? styles.incorrect : styles.correct}>
                            {incorrectLastname ? 'Неправильно введена фамилия' : 'Фамилия'}
                        </div>
                        <div className={styles.order__personal__background}>
                            <input
                                className={styles.order__personal__background__input}
                                type="text"
                                placeholder="Фамилия"
                                ref={lastnameRef}
                                onChange={() =>
                                    (lastnameRef.current.value = normalizeText(
                                        lastnameRef.current.value,
                                    ))
                                }
                                onClick={() => setIncorrectLastname(false)}
                            />
                        </div>
                        <div className={incorrectName ? styles.incorrect : styles.correct}>
                            {incorrectName ? 'Неправильно введено имя' : 'Имя'}
                        </div>
                        <div className={styles.order__personal__background}>
                            <input
                                className={styles.order__personal__background__input}
                                type="text"
                                placeholder="Имя"
                                ref={nameRef}
                                onChange={() =>
                                    (nameRef.current.value = normalizeText(nameRef.current.value))
                                }
                                onClick={() => setIncorrectName(false)}
                            />
                        </div>
                        <div className={styles.correct}>Отчество</div>
                        <div className={styles.order__personal__background}>
                            <input
                                className={styles.order__personal__background__input}
                                type="text"
                                placeholder="Отчество"
                                ref={patronymicRef}
                                onChange={() =>
                                    (patronymicRef.current.value = normalizeText(
                                        patronymicRef.current.value,
                                    ))
                                }
                            />
                        </div>
                        <div className={incorrectPhone ? styles.incorrect : styles.correct}>
                            {incorrectPhone ? 'Неправильно введён телефон' : 'Телефон'}
                        </div>
                        <div className={styles.order__personal__background}>
                            <input
                                className={styles.order__personal__background__input}
                                type="tel"
                                placeholder="Телефон"
                                ref={phoneRef}
                                onChange={() => {
                                    phoneRef.current.value = normalizePhone();
                                }}
                                onClick={() => setIncorrectPhone(false)}
                            />
                        </div>
                        <div className={incorrectEmail ? styles.incorrect : styles.correct}>
                            {incorrectEmail ? 'Нерпавильно введена почта' : 'Почта'}
                        </div>
                        <div className={styles.order__personal__background}>
                            <input
                                className={styles.order__personal__background__input}
                                type="email"
                                placeholder="Почта"
                                ref={emailRef}
                                onClick={() => setIncorrectEmail(false)}
                            />
                        </div>
                    </div>
                    <div
                        className={styles.order__payment}
                        style={{
                            background: bankColor,
                        }}>
                        <div className={styles.title}>Оплата картой</div>
                        <div className={styles.order__payment__img_block}>
                            <img
                                className={styles.order__payment__img_block__img_bank}
                                src={
                                    pathBankLogo
                                        ? require(`/node_modules/card-info/dist/banks-logos/${pathBankLogo}`)
                                        : ''
                                }
                            />
                            <img
                                className={styles.order__payment__img_block__img_brand}
                                src={
                                    pathBrandLogo
                                        ? require(`/node_modules/card-info/dist/brands-logos/${pathBrandLogo}`)
                                        : ''
                                }
                            />
                        </div>
                        <div className={incorrectCardNumber ? styles.incorrect : styles.correct}>
                            {incorrectCardNumber ? 'Неправильно введён номер карты' : 'Номер карты'}
                        </div>
                        <div className={styles.order__payment__background}>
                            <input
                                className={styles.order__payment__background__input}
                                type="text"
                                placeholder="Номер"
                                ref={cardNumberRef}
                                onChange={() =>
                                    (cardNumberRef.current.value = normalizeCardNumber())
                                }
                                onClick={() => setIncorrectCardNumber(false)}
                            />
                        </div>
                        <div className={styles.order__payment__bottom_incorrect}>
                            <div className={incorrectCardDate ? styles.incorrect : styles.correct}>
                                {incorrectCardDate ? 'Неправильно введена дата' : 'Срок действия'}
                            </div>
                            <div className={incorrectCardCvc ? styles.incorrect : styles.correct}>
                                {incorrectCardCvc ? 'Неправильно введён код' : 'CVC/CVV'}
                            </div>
                        </div>
                        <div className={styles.order__payment__bottom}>
                            <div className={styles.order__payment__bottom__background}>
                                <input
                                    className={styles.order__payment__bottom__background__input}
                                    type="text"
                                    placeholder="Дата"
                                    ref={cardDateRef}
                                    onChange={() =>
                                        (cardDateRef.current.value = normalizeCardDate())
                                    }
                                    onClick={() => setIncorrectCardDate(false)}
                                />
                            </div>
                            <div className={styles.order__payment__bottom__background}>
                                <input
                                    className={styles.order__payment__bottom__background__input}
                                    type="text"
                                    placeholder="CVC"
                                    ref={cardCvcRef}
                                    onChange={() => (cardCvcRef.current.value = normalizeCardCvc())}
                                    onClick={() => setIncorrectCardCVC(false)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.order__adress}>
                        <div className={styles.title}>Адрес доставки</div>
                        <div className={incorrectAddress ? styles.incorrect : styles.correct}>
                            {incorrectAddress ? 'Неправильно введён адрес' : 'Укажите на карте'}
                        </div>
                        <YMaps
                            query={{
                                ns: 'use-load-option',
                                load: 'package.full',
                                apikey: `${process.env.REACT_APP_API_MAP}`,
                            }}>
                            <MapBlock
                                setIncorrectAddress={() => setIncorrectAddress(false)}
                                setStreet={setStreet}
                                setHouse={setHouse}
                            />
                        </YMaps>
                    </div>
                    <input
                        className={styles.order__button}
                        type="button"
                        value="Заказать"
                        onClick={() => checkOrder()}
                    />
                </form>
            </div>
        );
    else if (orderedSuccessfully)
        return (
            <div className={styles.cart}>
                <div className={styles.cart__empty}>
                    <div className={styles.cart__empty__text}>Заказ оформлен!</div>
                    <div className={styles.cart__empty__text}>
                        Спасибо за заказ) Ждём Вас снова!
                    </div>
                    <Link to="/" className={styles.cart__empty__link}>
                        <button className={styles.cart__empty__link__button}>За покупками</button>
                        <img
                            className={styles.cart__empty__link__img}
                            src="img/dragon_love.png"
                            alt="dragon_love"
                        />
                    </Link>
                </div>
            </div>
        );
    else
        return (
            <div className={styles.cart}>
                <div className={styles.cart__empty}>
                    <div className={styles.cart__empty__text}>Корзина пуста</div>
                    <div className={styles.cart__empty__text}>Выберите игры и возвращайтесь</div>
                    <Link to="/" className={styles.cart__empty__link}>
                        <button className={styles.cart__empty__link__button}>За покупками</button>
                        <img
                            className={styles.cart__empty__link__img}
                            src="img/dragon_empty_cart.png"
                            alt="dragon_empty_cart"
                        />
                    </Link>
                </div>
            </div>
        );
}

export default Order;
