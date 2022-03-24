import React from 'react';
import logo from './logo.svg';

function TextBox(props: { label: string; change: (val: string) => void }) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={'text'} onChange={(changed) => props.change(changed.target.value)} />
        </div>
    );
}

export default TextBox;