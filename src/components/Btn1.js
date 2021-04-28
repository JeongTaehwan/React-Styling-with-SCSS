import React from 'react';
import className from 'classnames';
import './Btn1.scss';

function Btn1({ children, size, color, outline, fullWidth, ...rest }) {
    return (
        <button className={className('Button', size, color, {
            outline,
            fullWidth
        })} {...rest}>{children}</button>
    );
}

Btn1.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Btn1;