import React from 'react';
import CSS from './Form.module.css';

const form = (props) => {
    let formElements = null;
    switch(props.etype){
        case ('input'):
            formElements = <input className={CSS.FormElements} {...props} />
            break;
        case ('textarea'):
            formElements = <textarea className={CSS.FormElements} {...props} />
            break;
        default:
            formElements = <input className={CSS.FormElements} {...props} />
    }
    return (
        <div className={CSS.Form}>
            <label className={CSS.Label}>{props.label}</label>
            {formElements}
        </div>
    );
};

export default form;