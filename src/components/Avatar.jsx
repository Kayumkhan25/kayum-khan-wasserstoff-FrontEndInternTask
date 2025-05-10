import React from 'react';
import PropTypes from 'prop-types'; // If not using TypeScript

const Avatar = ({ imageUrl, altText, size, className }) => {
  const sizeClass = size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12';
  return (
    <img
      src={imageUrl}
      alt={altText}
      className={`rounded-full object-cover ${sizeClass} ${className}`}
    />
  );
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'medium',
  altText: 'Avatar',
};

export default Avatar;