import {createActions} from 'redux-actions';

export const {loadData, saveData, saveDefault} = createActions({
    LOAD_DATA: () => ({}),
    SAVE_DATA: (newData) => ({newData}),
    SAVE_DEFAULT: (selector, newData) => ({selector, newData})
});