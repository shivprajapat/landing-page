import React from 'react'
import PropTypes from 'prop-types';

export default function H4({ children, className, style }) {
    return (
        <h4 className={className} style={style}>{children}</h4>
    )
}

H4.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};