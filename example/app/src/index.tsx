import React from 'react';
import {createRoot} from 'react-dom/client';


const Hello = () => {
    const [text, setText] = React.useState('Hello waffle!');
    return (<span
        onClick={() => {
            setText('Hi!')
        }}> {text} </span>);
};



const root = createRoot(document.getElementById('waffle') as Element);
root.render(React.createElement(Hello));
