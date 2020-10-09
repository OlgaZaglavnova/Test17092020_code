import {handleActions} from 'redux-actions';
import {loadData, saveData, saveDefault} from './myActions';

import {data} from './data';

const defaultState = {
    data: {}
};

export default handleActions({
    [loadData]: (state) => {
        return {
            ...state,
            data,
            defaultValue: {}
        }
    },
    [saveData]: (state, {payload:{newData}}) => {
        return {
            ...state,
            localData: newData
        }
    },
    [saveDefault]: (state, {payload:{selector, newData}}) => {
        // console.log('Reducer selector=', selector);
        // console.log('Reducer newData=', newData);
        return {
            ...state,
            defaultValue: {
                ...state.defaultValue, 
                [selector]: newData
            }
        }
    }
}, defaultState);