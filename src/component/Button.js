import React from 'react'
import Proptypes from 'prop-types';
import '../styles/Button.css'

const Button = ({variant, text}) => {
    return(
        <button className={`btn btn-${variant}`}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: Proptypes.string.isRequired,
    variant: Proptypes.string.isRequired
}

export default Button;