import React from 'react'
import Proptypes from 'prop-types';
import '../styles/Button.css'

const Button = ({variant, text, action}) => {
    return(
        <button className={`btn btn-${variant}`} onClick={action}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: Proptypes.string.isRequired,
    variant: Proptypes.string.isRequired,
    action: Proptypes.func
}

export default Button;