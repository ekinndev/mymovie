import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({ title="Deneme", shortDesc="asjnaskşaksjakşsjakşsjasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaasjnaskşaksjakşsjakşsjakşsjşaksjaakşsjşaksja", imageUrl="https://m.media-amazon.com/images/M/MV5BMjcwYjEwYTMtNTE0Ni00YjQ5LTk5ZjUtOTc2NDQ2OTNlNDFiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY230_SX307_AL_.jpg", genre="Komedi", rating="3" }) => {
  return (
    <div className='card'>
      <img className='card-img' src={imageUrl} alt={title} />
      <div className='card-info'>
        <h2 className='card-title'>{title}</h2>
        <p className="py-1">
          {genre} - {rating}
        </p>
        <div className='card-description'>{shortDesc}</div>
      </div>
    </div>
  );
};

FilmCard.propTypes = {
  title: PropTypes.string,
  shortDesc: PropTypes.string,
  imageUrl: PropTypes.string,
  genre: PropTypes.array,
  rating: PropTypes.number
};

export default FilmCard;
