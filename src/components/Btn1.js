import React from 'react';
import className from 'classnames';
import './Btn1.scss';

function Btn1({ children, size, color }) {
    return (
        <button className={className('Button', size, color)}>{children}</button>
    );
}

Btn1.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Btn1;