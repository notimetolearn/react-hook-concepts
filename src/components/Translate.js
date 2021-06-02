import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Africa',
        value: 'af' 
    },
    {
        label: 'Arab',
        value: 'ar' 
    },
    {
        label: 'Hindi',
        value: 'hi' 
    }
];

const Translate = () => {

    const [option, setOption ] = useState(options[0]);
    const [text, setText] = useState('')

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Enter text to translate</label>
                <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            </div>
            <Dropdown options={options} selected={option} onSelectChanged={setOption} selectLabel="Select a language" />
            <br />
            <Convert text={text} language={option.value} />
        </div>
        
    );
}

export default Translate;