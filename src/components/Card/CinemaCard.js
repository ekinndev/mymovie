import React from 'react';
import PropTypes from 'prop-types';
import CinemaSkill from './CinemaSkills';

function CinemaCard(props) {
  return (
    <div className='cinema-card'>
      <img src='https://media.cinemaximum.com.tr/1110//Files/Teknolojiler/_MAX.jpg' className='cinema-img' alt='' />
      <div className='cinema'>
        <h1>IMAX</h1>
        <span>asasas</span>
      </div>
      <div className='cinema-skills'>
        <CinemaSkill>Deri Koltuk</CinemaSkill>
        <CinemaSkill>Deri Koltuk</CinemaSkill>
        <CinemaSkill>Deri Koltuk</CinemaSkill>
        <CinemaSkill>Deri Koltuk</CinemaSkill>
      </div>
    </div>
  );
}

CinemaCard.propTypes = {};

export default CinemaCard;
