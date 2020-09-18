import React, {useState} from 'react';

import {AutoComplete} from 'antd';
import './LanguageStyles.scss';

const {Option} = AutoComplete;

/**
 * Автозаполнение - языки
 * 
 * @param {languages} - array of objects 
 * {
 *  code: string, 
 *  description: string, 
 *  }
 */
export const LanguageComponent = ({languages, onLanguageChanged}) => {
    const [options, setOptions] = useState([]);

    // Выполняется при выборе языка
    const onSelect = (value) => {
        onLanguageChanged(languages.filter((lang) => (lang.description === value)));
        };

    return (
        <div className="languages_container">

            <AutoComplete 
                onSelect={onSelect}
                className='languages_autoComplete'
                placeholder='Bведите язык, которым Вы владеете'
            >
                {languages.map((language) => (
                    <Option key={language.code} value={language.description} className='languages_options'>
                        {language.description}
                    </Option>
                ))}
            </AutoComplete>
        </div>
    )
};