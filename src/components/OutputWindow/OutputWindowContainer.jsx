import React from 'react';
import {connect} from 'react-redux';

import {OutputWindowComponent} from './OutputWindowComponent';

const mapStateToProps = ({myReducer}, props) => {
    return {
        localData: myReducer.localData
    }
};

export default connect(mapStateToProps)(OutputWindowComponent);