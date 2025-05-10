import React from 'react';
import PropTypes from 'prop-types'; // If not using TypeScript

const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${className}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;