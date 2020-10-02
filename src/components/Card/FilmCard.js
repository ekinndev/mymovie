import React from 'react';
import PropTypes from 'prop-types';

const FilmCard = ({Title,Year,imdbRating,Plot ,Genre,Poster}) => {
  return (
    <div className='card'>
      <img className='card-img' src={Poster} alt={Title} />
      <div className='card-info'>
        <h2 className='card-title'>{Title} - {Year}</h2>
        <p className="py-1">
          {Genre} - Imdb:{imdbRating}
        </p>
        <div className='card-description'>{Plot.substring(0,200)}...</div>
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
