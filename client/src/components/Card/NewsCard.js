import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ haber_adi, haber_icerik, haber_img, haber_tarih }) => {
  return (
    <div className='card'>
      <img className='card-img' src={haber_img} alt={haber_adi} />
      <p className='py-1'>Tarih:{haber_tarih}</p>
      <div className='card-info'>
        <h2 className='card-title my-1'>{haber_adi}</h2>
        <div className='card-description'>{haber_icerik.substring(0, 200)}...</div>
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
