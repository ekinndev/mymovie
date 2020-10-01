import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../Card/FilmCard';
import NewsCard from '../Card/NewsCard';

function Landing({ siteTitle = 'My Movie', siteDesc = 'Sadece göründüğü gibi bir film sitesi değil...' }) {
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
          <FilmCard />
          <FilmCard />
          <FilmCard />
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

export default Landing;
