import React from 'react';
import {connect} from 'react-redux';

import {LanguageComponent} from './LanguageComponent';

const mapStateToProps = ({myReducer}, props) => {
    //console.log('LanguageContainer', props);
    return {
        languages: myReducer.data.languages
    }
};

export default connect(mapStateToProps)(LanguageComponent);