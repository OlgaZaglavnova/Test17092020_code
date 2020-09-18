import {createActions} from 'redux-actions';

export const {loadData, saveData} = createActions({
    LOAD_DATA: () => ({}),
    SAVE_DATA: (newData) => ({newData})
});