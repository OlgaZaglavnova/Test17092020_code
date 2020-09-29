import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import {Provider} from 'react-redux';
import {initStore} from './store/store';
import {loadData} from './store/myActions';

const myDataJSON = require('./store/data.json');

console.log('index JSON=', myDataJSON);

const store = initStore();
store.dispatch(loadData());

ReactDom.render(
    <Provider store={store}>
        <App store={store} />
    </Provider>, document.getElementById('root')
);