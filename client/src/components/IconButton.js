import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ onClick, icon }) => {
  return (
    <button className='btn' onClick={onClick}>
      {icon}
    </button>
  );
};
IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default IconButton;
