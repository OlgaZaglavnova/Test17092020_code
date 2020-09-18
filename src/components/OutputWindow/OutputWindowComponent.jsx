import React, {useState} from 'react';
import './OutputWindowStyles.scss';

/**
 * Окно вывода результата
 * @param {localData} - объект, содержащий выбранные данные и сохраненный в store Redux
 *  {
 *  place: {
 *          id: number,
 *          name: string
 *          },
 *  language: {
 *          code: string,
 *          description: string
 *          }
 * }
 */
export const OutputWindowComponent = ({localData, close}) => {

    return (
        <div className="outputWindow_container">
            <div className="outputWindow_modal">
                <div className="outputWindow_modal--close" onClick={close}>
                &times;
                </div>
                <div className="outputWindow_place">
                    <p>Место:</p>
                    <p>
                        <span className="outputWindow_place--id">id: {localData.place.id} </span>
                        <span className="outputWindow_place--name">name: {localData.place.name}</span>
                    </p>
                </div>
                <div className="outputWindow_language">
                    <p>Язык:</p>
                    <p>
                        <span className="outputWindow_language--code">{localData.language.code}, </span>
                        <span className="outputWindow_language--description">{localData.language.description}</span>
                    </p>
                </div>
            </div>
            
        </div>
    )
};