import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../Card/FilmCard';
import NewsCard from '../Card/NewsCard';
import Spinner from './Spinner';
import { getFilms } from '../../store/actions/film';
import { getNews } from '../../store/actions/news';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Landing({
  getFilms,
  getNews,
  film: { films, filmloading },
  news: { news, newsLoading },
  siteTitle = 'My Movie',
  siteDesc = 'Sadece göründüğü gibi bir film sitesi değil...'
}) {
  useEffect(() => {
    getFilms();
    getNews();
  }, [getFilms, getNews]);
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
          {filmloading ? (
            <Spinner />
          ) : (
            films.slice(0, 3).map((film, i) => (
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
          {newsLoading ? (
            <Spinner />
          ) : (
            news.slice(0, 3).map((thenews, i) => (
              <Link key={thenews.id} to={`/news/${thenews.id}`}>
                <NewsCard {...thenews} />
              </Link>
            ))
          )}
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
  film: state.film,
  news: state.news
});
export default connect(mapStateToProps, { getFilms, getNews })(Landing);
