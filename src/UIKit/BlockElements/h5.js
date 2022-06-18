import React from 'react'
import PropTypes from 'prop-types';

export default function H5({ children, className, style }) {
    return (
        <h5 className={className} style={style}>{children}</h5>
    )
}

H5.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};