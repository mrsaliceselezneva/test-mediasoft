import styles from './Order.module.scss';

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import { RiDeleteBin6Line } from 'react-icons/ri';

import CardInfo from 'card-info';

function Order() {
    const nameRef = useRef(null);
    const lastnameRef = useRef(null);
    const patronymicRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const cardNumberRef = useRef(null);
    const cardDateRef = useRef(null);
    const cardCvcRef = useRef(null);

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

    function normalizeEmail() {
        console.log(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(emailRef.current.value));
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
            brandsLogosPath: '/node_modules/card-info/dist/banks-logos/',
        });
        console.log(cardInfo);
        if (cardInfo.bankName) {
            setPathBankLogo(cardInfo.bankLogoPng.slice(lenPathBanksLogos));
            setPathBrandLogo(cardInfo.brandLogoPng.slice(lenPathBanksLogos));
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

    return (
        <div className={styles.wrapper}>
            <form className={styles.order}>
                <div className={styles.order__personal}>
                    <div className={styles.title}>Контактные данные</div>
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
                        />
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
                        />
                    </div>
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
                    <div className={styles.order__personal__background}>
                        <input
                            className={styles.order__personal__background__input}
                            type="tel"
                            placeholder="Телефон"
                            ref={phoneRef}
                            onChange={() => {
                                phoneRef.current.value = normalizePhone();
                            }}
                        />
                    </div>
                    <div className={styles.order__personal__background}>
                        <input
                            className={styles.order__personal__background__input}
                            type="email"
                            placeholder="Почта"
                            ref={emailRef}
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
                    <div className={styles.order__payment__background}>
                        <input
                            className={styles.order__payment__background__input}
                            type="text"
                            placeholder="Номер"
                            ref={cardNumberRef}
                            onChange={() => (cardNumberRef.current.value = normalizeCardNumber())}
                        />
                    </div>
                    <div className={styles.order__payment__bottom}>
                        <div className={styles.order__payment__bottom__background}>
                            <input
                                className={styles.order__payment__bottom__background__input}
                                type="text"
                                placeholder="Дата"
                                ref={cardDateRef}
                                onChange={() => (cardDateRef.current.value = normalizeCardDate())}
                            />
                        </div>
                        <div className={styles.order__payment__bottom__background}>
                            <input
                                className={styles.order__payment__bottom__background__input}
                                type="text"
                                placeholder="CVC"
                                ref={cardCvcRef}
                                onChange={() => (cardCvcRef.current.value = normalizeCardCvc())}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.order__adress}></div>
            </form>
        </div>
    );
}

export default Order;
