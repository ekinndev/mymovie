import React from 'react';
import PropTypes from 'prop-types';
import CinemaCard from '../../Card/CinemaCard';

function Cinema(props) {
  return (
    <div className='container'>
      <h1 className='large m-1'>Sinema Salonları</h1>
      <CinemaCard />
      <CinemaCard />
      <CinemaCard />
      <CinemaCard />
    </div>
  );
}

Cinema.propTypes = {};

export default Cinema;
