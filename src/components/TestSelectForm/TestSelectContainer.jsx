import React from 'react';
import {connect} from 'react-redux';

import {TestSelectComponent} from './TestSelectComponent';

const mapStateToProps = ({myReducer}, props) => {
    return {
        countries: myReducer.data.countries
    }
};

export default connect(mapStateToProps)(TestSelectComponent);