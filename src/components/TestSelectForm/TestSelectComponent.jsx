import React, {useState} from 'react';

import {Form, Select, Radio, Rate} from 'antd';

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

export const TestSelectComponent = () => {
        //const selector = 'second';
        const [selector, setSelector] = useState('1');
        const [defValue,setDefValue] = useState(countries[selector][0].name);

        const onChange = (e) => {
            console.log(e.target.value);
            setSelector(e.target.value);
            setDefValue(countries[selector][0].name);
        };

        const onChangeSelect = (e) => {
            console.log(e);
            setDefValue(e);
        };

        return (
            <Form initialValues={{
                'select': countries[selector][0].name,
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
                        <Select defaultActiveFirstOption={true}>
                            {countries[selector].map((country) => {
                                return (<Select.Option key={country.id} value={country.name}>{country.name}</Select.Option>)
                            })}
                        </Select>
                </Form.Item>
                <Form.Item name='rate' label='Rate'>
                    <Rate />
                </Form.Item>
            </Form>
        );
};
