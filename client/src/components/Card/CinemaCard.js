import React from 'react';
import PropTypes from 'prop-types';
import CinemaSkill from './CinemaSkills';

function CinemaCard({ salon_adi, salon_aciklama, salon_img, ozellikler, id }) {
  return (
    <div className='cinema-card'>
      <img src={salon_img} className='cinema-img' alt={salon_adi} />
      <div className='cinema'>
        <h1>{salon_adi}</h1>
        <span>{salon_aciklama}</span>
      </div>
      <div className='cinema-skills'>
        {ozellikler.map((oz,i) => (
          <CinemaSkill key={i}>{oz}</CinemaSkill>
        ))}
      </div>
    </div>
  );
}

CinemaCard.propTypes = {
  salon_adi: PropTypes.string.isRequired,
  salon_aciklama: PropTypes.string.isRequired,
  salon_img: PropTypes.string.isRequired,
  ozellikler: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};
export default CinemaCard;
