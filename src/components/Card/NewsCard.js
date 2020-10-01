import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({
  title = 'Deneme',
  shortDesc = 'asjnaskşaksjakşsjakşsjasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaakşsjşaksja',
  imageUrl = 'https://m.media-amazon.com/images/M/MV5BMjcwYjEwYTMtNTE0Ni00YjQ5LTk5ZjUtOTc2NDQ2OTNlNDFiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY230_SX307_AL_.jpg'
}) => {
  return (
    <div className='card'>
      <img className='card-img' src={imageUrl} alt={title} />
      <div className='card-info'>
        <h2 className='card-title'>{title}</h2>
        <div className='card-description'>{shortDesc}</div>
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
