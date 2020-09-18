import React from 'react';

import {Tree} from 'antd';
import './PlaceStyles.scss';
/**
 * Дерево - страны и города
 * 
 * @param {countries} - array of objects 
 * {
 *  id: number, 
 *  name: string, 
 *  cities: array of objects
 *      {
 *      id: number,
 *      name: string
 *      }
 *  }
 * @param {languages} - array of objects 
 * {
 *  code: string, 
 *  description: string, 
 *  }
 */
export const PlaceComponent = ({countries, onPlaceChanged}) => {
    //Выполняется при выборе ветви или листа дерева
    const onSelect = (selectedKeys, info) => {
        onPlaceChanged({
            id: info.node.key,
            name: info.node.title
        });
    };

    return (
        <div className='place_container'>
            <Tree 
                treeData={countries}
                onSelect={onSelect}
                className='place_tree'
            />
        </div>
    )
};