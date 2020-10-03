import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import Hearth from '../Icon/Hearth';
import HearthFill from '../Icon/HearthFill';
import { addFav, removeFav } from '../../store/actions/film';
import { connect } from 'react-redux';

const FilmCard = ({ addFav, removeFav, favs, Title, Year, imdbRating, Plot, Genre, Poster, imdbID }) => {
  const isFav = !(favs.indexOf(imdbID) < 0);
  return (
    <div className='card'>
      <IconButton
        icon={isFav ? <HearthFill /> : <Hearth />}
        onClick={e => {
          e.preventDefault();
          if (isFav) {
            removeFav(imdbID);
          } else {
            addFav(imdbID);
          }
        }}
      />
      <img className='card-img' src={Poster} alt={Title} />
      <div className='card-info'>
        <h2 className='card-title'>
          {Title} - {Year}
        </h2>
        <p className='py-1'>
          {Genre} - <span className='imdb'>Imdb:{imdbRating}</span>
        </p>
        <div className='card-description'>{Plot.substring(0, 200)}...</div>
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

const mapStateToProps = state => ({
  favs: state.film.favs
});

export default connect(mapStateToProps, { addFav, removeFav })(FilmCard);
