# Интернет-магазин настольных игр

## Фамилия Имя

Полувесов Артём

## Тестовое задание React

Написать SPA приложение (интернет-магазин)

## Описание проекта

Это проект интернет-магазина по продаже настольных игр. Игры и категории хранятся на беке от [https://mockapi.io/](mockapi.io).\

Есть функционал сортировки, фильтрации поиска товаров, реализованна пагинация и визуализация загрузки. К сожалению, бек не может одновременно обрабатывать запрос на поиск и на фильтрацию. Поэтому при выборе поиска сбрасывается фильтрация и наоборот.\

Адаптивая вёрстка.\

При оформлении заказа есть валидация данных. Также использована библиотека `card-info` для визуализации ввода данных карты.
При наведении на корзину появлется сумма заказа. Так сделал для экономии места. И чтобы при адаптиве не мешала.\

Так как бек не может нормально по `id` возвращать один элемент, то пришлось хранить текущий выбранный товар в `redux`. Из-за этого нельзя открыть больше одного товара.\

У каждого товара есть категории. Если у открытого товара нажать на категорию, то можно просмотреть все товары данной категории.\

Состояние запроса поиска хранию в `contex`.\

Картинки брал с бека у `Hobby Games`.

## Подготовительные действия

Чтобы запустить проект надо:

-   `git clone https://github.com/mrsaliceselezneva/test-mediasoft`
-   открыть папку с проектом в консоли
-   ввести в консоль команду `npm install`

## Информация о доступах

Никакие логины и пароли не нужны.\

При введении данных карты, попробуйте номер `4377730000000000`. Так как это подключённая библиотека, то там не все маски карт есть.

## Как запустить проект

Открыть паапку проекта в консоли и выполнить команду `npm start`. Если вас не перебросило в браузер, то окройте его и введите в адресную строку `http://localhost:3000` или просто нажмите на [http://localhost:3000](http://localhost:3000).
