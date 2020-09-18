import React from 'react';
import {connect} from 'react-redux';

import {PlaceComponent} from './PlaceComponent';

const mapStateToProps = ({myReducer}, props) => {
    return {
        countries: myReducer.data.countries
    }
};

export default connect(mapStateToProps)(PlaceComponent);