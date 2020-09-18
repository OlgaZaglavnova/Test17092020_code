import {createStore, combineReducers} from 'redux';
import myReducer from './myReducer';

const reducer = combineReducers({
    myReducer
});

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState);
};