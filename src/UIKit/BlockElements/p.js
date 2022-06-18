import React from 'react'
import PropTypes from 'prop-types';

export default function P({ children, className, style }) {
    return (
        <p className={className}>{children}</p>
    )
}

P.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};