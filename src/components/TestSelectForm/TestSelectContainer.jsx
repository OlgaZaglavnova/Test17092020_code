import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveDefault} from '../../store/myActions';

import {TestSelectComponent} from './TestSelectComponent';

const mapStateToProps = ({myReducer}, props) => {
    return {
        countries: myReducer.data.countries,
        defaultValue: myReducer.defaultValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({saveDefault}, dispatch);
};

const mergeProps = (stateProps, dispatchProps, props) => {
    return {
        ...stateProps,
        saveDefault: ({selector, newData}) => dispatchProps.saveDefault(selector, newData), 
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(TestSelectComponent);