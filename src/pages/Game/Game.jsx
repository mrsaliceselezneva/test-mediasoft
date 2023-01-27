import styles from './Game.module.scss';

import { FaCartPlus } from 'react-icons/fa';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Game(props) {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState([]);
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');

    let { search } = useLocation();
    const params = new URLSearchParams(search);
    const gameId = params.get('id');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/items/?id=${gameId}`).then((response) => {
            // так как бек не может вернуть один товар по такому запросу, то я допишу дальше цикл
            response.data.map((element) => {
                console.log(element.id, gameId);
                if (element.id === gameId) {
                    console.log(element);
                    setName(element.name);
                    setImg(element.img);
                    setDescription(element.description);
                    setCategory(element.category);
                    setPrice(element.price);
                    setId(gameId);
                }
            });
        });
    }, []);

    return (
        <div className={styles.game}>
            <div className={styles.game__body}>
                <div className={styles.game__body__name}></div>
                <img
                    className={styles.game__body__img}
                    src={img}
                    alt={'здесь скоро будет изображение'}
                />
                <div className={styles.game__body__categories}>
                    <div className={styles.game__body__categories__categoory}></div>
                </div>
                <div className={styles.game__body__descriptions}></div>
            </div>
            <div className={styles.game__price}></div>
        </div>
    );
}

export default Game;
