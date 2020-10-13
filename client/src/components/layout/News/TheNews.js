import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getTheNews, clearNews } from '../../../store/actions/news';
import Spinner from '../Spinner';
import { connect } from 'react-redux';

const TheNews = ({ getTheNews, clearNews, news: { thenew, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getTheNews(id);
    return () => {
      clearNews();
    };
  }, [id, getTheNews, clearNews]);
  return loading || !thenew ? (
    <Spinner />
  ) : (
    <div className='container'>
      <h1 className='medium my-2'>{thenew.haber_adi}</h1>
      <p className='small'>{thenew.haber_tarih}</p>
      <img  className="film-img my-2" src={thenew.haber_img} alt={thenew.haber_adi} />
      <p className='small yazi-icerigi my-2'>{thenew.haber_icerik}</p>
    </div>
  );
};

TheNews.propTypes = {
  getTheNews: PropTypes.func.isRequired,
  clearNews: PropTypes.func.isRequired,
  news: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps, { getTheNews, clearNews })(TheNews);
