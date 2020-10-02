import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { getFilms } from '../../../store/actions/film';
import { connect } from 'react-redux';
import FilmCard from '../../Card/FilmCard';
import { Link } from 'react-router-dom';

function Films({ getFilms, film: { films, loading } }) {
  useEffect(() => {
    getFilms();
  }, [getFilms]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container'>
        <h1 className='large'>Filmler</h1>
        {films.map((film, i) => (
          <Link key={i} to={`/film/${film.imdbID}`}>
          <FilmCard  {...film} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
}

Films.propTypes = {
  getFilms: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  film: state.film
});

export default connect(mapStateToProps, { getFilms })(Films);
