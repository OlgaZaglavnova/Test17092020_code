import React, {useState} from 'react';

import {Form, Select, Radio, Rate} from 'antd';

import './TestSelect.scss';

const {Option} = Select;

const countries = {'1': [
    {id: 1, name: 'China'},
    {id: 2, name: 'Russia'},
    {id: 3, name: 'USA'},
    {id: 4, name: 'Canada'}
],
'2': [
    {id: 1, name: 'Brazil'},
    {id: 2, name: 'Portugal'},
    {id: 3, name: 'Italy'}
]
};

export const TestSelectComponent = ({defaultValue, saveDefault}) => {

        const [selector, setSelector] = useState('1');
                       
        const onChange = (e) => {
            setSelector(e.target.value);
        };

        const onChangeSelectAntd = (e) => {
            console.log('onChangeSelectAntd', selector, e);
            saveDefault({selector, newData: e});
        };

        const onChangeSelect = (e) => {
            console.log('onChangeSelect', selector, e.currentTarget.value);
            saveDefault({selector, newData: e.currentTarget.value});
        };

        const isSelected = (item) => {
            if (defaultValue[selector]){
                return item.name === defaultValue[selector] ? true : false;
            } else {
                return item.id === countries[selector][0].id ? true : false;
            }
        };

        console.log('TestSelectComponent', defaultValue, selector);

        return (
            <Form initialValues={{
                'select': defaultValue[selector] ? defaultValue[selector] : [countries[selector][0].name],
                'radio-group': '1',
                rate: 4
            }} >
                <Form.Item name='radio-group'>
                    <Radio.Group onChange={onChange}>
                        <Radio value='1'>1</Radio>
                        <Radio value='2'>2</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name='select'>
                        <Select onChange={onChangeSelectAntd} value={defaultValue[selector] ? defaultValue[selector] : [countries[selector][0].name]} mode='multiple'>
                            {countries[selector].map((country) => {
                                return (<Select.Option key={country.id} value={country.name}>{country.name}</Select.Option>)
                            })}
                        </Select>
                        <select className='select' onChange={onChangeSelect}>
                        {countries[selector].map((country) => {
                                return (<option key={country.id} value={country.name} selected={isSelected(country)}>{country.name}</option>)
                            })}
                        </select>
                </Form.Item>
                <Form.Item name='rate' label='Rate'>
                    <Rate />
                </Form.Item>
            </Form>
        );
};
