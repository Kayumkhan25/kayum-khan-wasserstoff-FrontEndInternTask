import React from 'react';
import PropTypes from 'prop-types'; // If not using TypeScript

const Card = ({ title, children, className }) => {
  return (
    <div className={`border rounded shadow-md p-4 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Card;