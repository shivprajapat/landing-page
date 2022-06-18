import React from 'react'
import PropTypes from 'prop-types';

export default function Div({ children, className, style }) {
    return (
        <div className={className} style={style}>{children}</div>
    )
}

Div.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};