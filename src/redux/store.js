import { createStore } from 'redux';
import axios from "axios";

const intialState = {
    cities: 0
}

const reducer = (state = intialState, action) => {
    console.log('reducer -> ', action);

    return state;
}

const store = createStore(reducer);

export default store;