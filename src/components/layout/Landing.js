import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../Card/FilmCard';
import NewsCard from '../Card/NewsCard';
import Spinner from './Spinner';
import { getFilms } from '../../store/actions/film';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Landing({
  getFilms,
  film: { films, loading },
  siteTitle = 'My Movie',
  siteDesc = 'Sadece göründüğü gibi bir film sitesi değil...'
}) {
  useState(() => {
    getFilms();
  }, []);
  return (
    <Fragment>
      <div className='landing'>
        <div className='backdrop'>
          <div className='site-info'>
            <h1 className='large'>{siteTitle}</h1>
            <p className='lead'>{siteDesc}</p>
          </div>
        </div>
      </div>
      <section className='last-films'>
        <div className='container'>
          <h1 className='large section-title'>Son Eklenen Filmler</h1>
          {loading ? (
            <Spinner />
          ) : (
            films.slice(0, 3).map((film,i) => (
              <Link key={i} to={`/film/${film.imdbID}`}>
                <FilmCard {...film} />
              </Link>
            ))
          )}
        </div>
      </section>
      <section className='last-news my-2'>
        <div className='container'>
          <h1 className='large section-title'>Son Eklenen Haberler</h1>

          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section>
    </Fragment>
  );
}

Landing.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string
};
const mapStateToProps = state => ({
  film: state.film
});
export default connect(mapStateToProps, { getFilms })(Landing);
