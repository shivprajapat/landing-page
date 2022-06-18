import React from 'react'
import PropTypes from 'prop-types';

export default function H3({ children, className, style }) {
    return (
        <h3 className={className} style={style}>{children}</h3>
    )
}

H3.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};