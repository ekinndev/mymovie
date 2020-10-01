import React from 'react';
import PropTypes from 'prop-types';

function Landing({ siteTitle = 'My Movie', siteDesc = 'Sadece göründüğü gibi bir film sitesi değil...' }) {
  return (
    <div className='landing'>
      <div className='backdrop'>
        <div className='site-info'>
          <h1 className='large'>{siteTitle}</h1>
          <p className='lead'>{siteDesc}</p>
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string
};

export default Landing;
