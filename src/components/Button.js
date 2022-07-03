import React from 'react';
import propTypes from 'prop-types';
import '../styles/Button.css';

export default function Button({variant, text, action}) {
  return (
    <div>
      <button className={`btn btn-${variant}`} onClick={action}>{text}</button>
    </div>
  )
}

Button.propTypes = {
    variant: propTypes.string.isRequired,
    text: propTypes.string.isRequired
}





