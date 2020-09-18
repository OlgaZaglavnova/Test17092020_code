import React from 'react';

import PlaceContainer from './Place/PlaceContainer';
import LanguageContainer from './Language/LanguageContainer';

import {saveData} from '../store/myActions';

import './App.scss';

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            place: {},
            language: {}
        };
        this.onPlaceChanged = this.onPlaceChanged.bind(this);
        this.onLanguageChanged = this.onLanguageChanged.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
 // Выполняется при выборе страны или города - сохраняет новое значение в локальный state
    onPlaceChanged = (newPlace) => {
        this.setState({place: newPlace});
    };
 // Выполняется при выборе языка - сохраняет новое значение в локальный state
    onLanguageChanged = (newLanguage) => {
        if (newLanguage.length > 0){
            this.setState({language: newLanguage[0]});
        }
    };

    //Выполняется при нажатии на кнопку Сохранить - сохранение данных в Redux
    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.store.dispatch(saveData({
            place: this.state.place,
            language: this.state.language
        }));

        const storeData = this.props.store.getState();
        console.log('App store=', storeData.myReducer.localData);
    };

    render() {
        return <div className='app_container'>
                    <div className = 'app_header'>
                    Тестовое задание<br />
                    Выполнено: Заглавновой Ольгой, сентябрь 2020 г.
                    </div>
                    <form className="app_form" onSubmit={this.onSubmitForm}>
                        <PlaceContainer onPlaceChanged={this.onPlaceChanged} />
                        <LanguageContainer onLanguageChanged={this.onLanguageChanged} />
                        <div className='app_submit'>
                        <input type='submit' className='app_submit_btn' value='Сохранить' />
                        </div>
                    </form>
                </div>
    }
}

export default App;