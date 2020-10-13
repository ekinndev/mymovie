import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { getFilms, searchFilm } from '../../../store/actions/film';
import { connect } from 'react-redux';
import FilmCard from '../../Card/FilmCard';
import { Link } from 'react-router-dom';
import SearchBox from './Search/SearchBox';

function Films({ getFilms, searchFilm, film: { films, loading, favs, searchResults, isSearch } }) {
  useEffect(() => {
    getFilms();
  }, [getFilms]);

  const [filter, setFilter] = useState([]);
  const [showFav, setShowFav] = useState(false);

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
  const handleSearchFilms = (name, type, year) => {
    searchFilm(name, type, year);
  };
  const toggleFav = () => {
    setShowFav(prevState => !prevState);
  };
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container'>
        {!isSearch && (
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
            <label htmlFor='filter4'>
              <input type='checkbox' name='fav' value='fav' checked={showFav} onChange={toggleFav} />
              Favoriler
            </label>
          </div>
        )}
        <SearchBox searchFn={handleSearchFilms} />
        {!isSearch && <h1 className='medium my-2'>Filmler</h1>}
        <div className='kartlar'>
          {isSearch ? (
            searchResults == null ? (
              <h1 className='large'>Film Bulunamadı</h1>
            ) : (
              searchResults.map((result, i) => (
                <Link key={i} to={`/film/${result.imdbID}`}>
                  <FilmCard {...result} type='search' />
                </Link>
              ))
            )
          ) : (
            films
              .filter(film => {
                let isFilter = true;
                if (showFav) {
                  isFilter = isFilter && !(favs.indexOf(film.imdbID) < 0);
                }
                filter.forEach(filt => {
                  isFilter = isFilter && film.Genre.includes(filt);
                });
                return isFilter;
              })
              .map((film, i) => (
                <Link key={i} to={`/film/${film.imdbID}`}>
                  <FilmCard {...film} />
                </Link>
              ))
          )}
        </div>
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

export default connect(mapStateToProps, { getFilms, searchFilm })(Films);
