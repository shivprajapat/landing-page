import React from 'react'
import PropTypes from 'prop-types';

export default function H2({ children, className, style }) {
    return (
        <h2 className={className} style={style}>{children}</h2>
    )
}

H2.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};