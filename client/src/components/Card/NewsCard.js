import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ haber_adi, haber_icerik, haber_img }) => {
  return (
    <div className='card'>
      <img className='card-img' src={haber_img} alt={haber_adi} />
      <div className='card-info'>
        <h2 className='card-title'>{haber_adi}</h2>
        <div className='card-description'>{haber_icerik}</div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  shortDesc: PropTypes.string,
  imageUrl: PropTypes.string
};

export default NewsCard;
