import styles from './MapBlock.module.scss';

import React, { useRef, useEffect } from 'react';

import { useYMaps } from '@pbe/react-yandex-maps';

function MapBlock(props) {
    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map']);

    const defaultState = {
        center: [54.31800414150244, 48.39647750793459],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl'],
    };

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

        const myMap = new ymaps.Map(mapRef.current, defaultState);

        var searchControl = new ymaps.control.SearchControl({
            options: {
                provider: 'yandex#search',
            },
        });

        // Добавим поиск на карту
        myMap.controls.add(searchControl);

        searchControl.events.add('resultselect', function (event) {
            var index = event.get('index');
            searchControl.getResult(index).then(function (res) {
                const position = res.geometry.getCoordinates(); // получаем координаты найденной точки

                myMap.geoObjects.removeAll();

                ymaps.geocode(position, { kind: 'house' }).then(
                    function (res) {
                        var nearest = res.geoObjects.get(0);
                        var name = nearest.properties.get('name');
                        console.log(name.split(','));
                        props.setStreet(name.split(',')[0]);
                        props.setHouse(name.split(',')[1]);
                        nearest.properties.set('iconContent', name);
                        nearest.options.set('preset', 'islands#redStretchyIcon');
                        myMap.geoObjects.add(nearest);
                    },
                    function (err) {
                        alert('Ошибка');
                    },
                );

                /* Можем ставить метку */
            });
        });

        // const address = 'Россия, Москва, Тверская, д. 7';
        // const address = [54.31800414150244, 48.39647750793459];

        // ymaps.geocode(address, { kind: 'house' }).then(
        //     function (res) {
        //         var nearest = res.geoObjects.get(0);
        //         var name = nearest.properties.get('name');
        //         nearest.properties.set('iconContent', name);
        //         nearest.options.set('preset', 'islands#redStretchyIcon');
        //         myMap.geoObjects.add(nearest);
        //     },
        //     function (err) {
        //         alert('Ошибка');
        //     },
        // );

        // ymaps.geocode(address, { results: 1 });
        // var coord = res.geoObjects.get(0).geometry.getCoordinates();

        // var myPlacemark = new ymaps.Placemark(coord, null, {
        //     preset: 'islands#redIcon',
        //     draggable: true,
        // });

        /* Событие dragend - получение нового адреса */
        // myPlacemark.events.add('dragend', function (e) {
        //     var cord = e.get('target').geometry.getCoordinates();
        //     $('#ypoint').val(cord);
        //     ymaps.geocode(cord).then(function (res) {
        //         var data = res.geoObjects.get(0).properties.getAll();
        //         $('#address').val(data.text);
        //     });
        // });

        // myMap.geoObjects.add(myPlacemark);

        myMap.events.add('click', function (event) {
            // Географические координаты точки клика можно узнать
            // посредством вызова метода .get('coords').
            const position = event.get('coords');

            myMap.geoObjects.removeAll();

            ymaps.geocode(position, { kind: 'house' }).then(
                function (res) {
                    var nearest = res.geoObjects.get(0);
                    var name = nearest.properties.get('name');
                    console.log(name.split(','));
                    props.setStreet(name.split(',')[0]);
                    props.setHouse(name.split(',')[1]);
                    nearest.properties.set('iconContent', name);
                    nearest.options.set('preset', 'islands#redStretchyIcon');
                    myMap.geoObjects.add(nearest);
                },
                function (err) {
                    alert('Ошибка');
                },
            );

            // myMap.geoObjects.removeAll();
            // myMap.geoObjects.add(new ymaps.Placemark(event.get('coords')));
            // console.log(position);
        });
    }, [ymaps]);

    return <div ref={mapRef} className={styles.map} />;
}

export default MapBlock;
