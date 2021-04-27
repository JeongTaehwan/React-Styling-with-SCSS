import React from 'react';
import className from 'classnames';
import './Btn1.scss';

function Btn1({ children, size }) {
    return (
        <button className={className('Button', size)}>{children}</button>
    );
}

Btn1.defaultProps = {
    size: 'medium'
};

export default Btn1;