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

        myMap.controls.add(searchControl);

        searchControl.events.add('resultselect', function (event) {
            var index = event.get('index');
            searchControl.getResult(index).then(function (res) {
                const position = res.geometry.getCoordinates();

                myMap.geoObjects.removeAll();

                ymaps.geocode(position, { kind: 'house' }).then(
                    function (res) {
                        var nearest = res.geoObjects.get(0);
                        var name = nearest.properties.get('name');
                        props.setStreet(name.split(',')[0]);
                        props.setHouse(name.split(',')[1]);
                        nearest.properties.set('iconContent', name);
                        nearest.options.set('preset', 'islands#redStretchyIcon');
                        myMap.geoObjects.add(nearest);
                    },
                    function (error) {
                        alert('Ошибка');
                    },
                );
            });
        });

        myMap.events.add('click', function (event) {
            const position = event.get('coords');

            myMap.geoObjects.removeAll();

            ymaps.geocode(position, { kind: 'house' }).then(
                function (res) {
                    var nearest = res.geoObjects.get(0);
                    var name = nearest.properties.get('name');
                    props.setStreet(name.split(',')[0]);
                    props.setHouse(name.split(',')[1]);
                    nearest.properties.set('iconContent', name);
                    nearest.options.set('preset', 'islands#redStretchyIcon');
                    myMap.geoObjects.add(nearest);
                },
                function (error) {
                    alert('Ошибка');
                },
            );
        });
    }, [ymaps]);

    return <div ref={mapRef} className={styles.map} onClick={props.setIncorrectAddress} />;
}

export default MapBlock;
