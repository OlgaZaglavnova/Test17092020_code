import {handleActions} from 'redux-actions';
import {loadData, saveData} from './myActions';

import {data} from './data';

const defaultState = {
    data: {}
};

export default handleActions({
    [loadData]: (state) => {
        return {
            ...state,
            data
        }
    },
    [saveData]: (state, {payload:{newData}}) => {
        return {
            ...state,
            localData: newData
        }
    }
}, defaultState);