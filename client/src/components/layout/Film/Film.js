import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilm, clearFilm } from '../../../store/actions/film';
import Spinner from '../Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Film = ({ getFilm, clearFilm, film: { film, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getFilm(id);
    return () => {
      clearFilm();
    };
  }, [id, getFilm, clearFilm]);

  return loading || !film ? (
    <Spinner />
  ) : (
    <div className='container py-3'>
      <h1 className='large my-2'>{film.Title}</h1>
      <span className='small'>
        {film.Released} - IMDB:{film.imdbRating} - {film.Genre} - {film.Rated} - {film.Runtime}
      </span>
      <img className='film-img' src={film.Poster} alt={film.Title} />
      <h2 className='large my-3'>Film İçeriği - Plot</h2>
      <p className='small'>{film.Plot}</p>
    </div>
  );
};

Film.propTypes = {
  film: PropTypes.object.isRequired,
  getFilm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  film: state.film
});

export default connect(mapStateToProps, { getFilm, clearFilm })(Film);
