import React, { Fragment, useEffect, useState } from 'react';
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

  const [filter, setFilter] = useState([]);

  const addFilters = e => {
    const value = e.target.value;

    setFilter(exState => {
      const isFound = exState.indexOf(value);
      if (isFound === -1) return [...exState, value];
      else {
        const newArr = [...exState];
        newArr.splice(isFound, 1);
        return [...newArr];
      }
    });
  };
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container'>
        <div className='filter my-2'>
          <label htmlFor='filter1'>
            <input
              type='checkbox'
              name='filter1'
              checked={!(filter.indexOf('Comedy') < 0)}
              value='Comedy'
              onChange={addFilters}
            />
            Komedi
          </label>
          <label htmlFor='filter2'>
            <input
              type='checkbox'
              checked={!(filter.indexOf('Drama') < 0)}
              name='filter2'
              value='Drama'
              onChange={addFilters}
            />
            Drama
          </label>
          <label htmlFor='filter3'>
            <input
              type='checkbox'
              name='filter3'
              checked={!(filter.indexOf('Action') < 0)}
              value='Action'
              onChange={addFilters}
            />
            Aksiyon
          </label>
          <label htmlFor='filter4'>
            <input
              type='checkbox'
              name='filter4'
              value='Thriller'
              checked={!(filter.indexOf('Thriller') < 0)}
              onChange={addFilters}
            />
            Gerilim
          </label>
        </div>
        <h1 className='large'>Filmler</h1>
        {films
          .filter(film => {
            let isFilter = true;
            filter.forEach(filt => {
              isFilter = isFilter && film.Genre.includes(filt);
            });
            return isFilter;
          })
          .map((film, i) => (
            <Link key={i} to={`/film/${film.imdbID}`}>
              <FilmCard {...film} />
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
