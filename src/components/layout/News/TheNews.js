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
    <div className='container py-3'>
      <h1 className='large my-2'>{thenew.haber_adi}</h1>
      <span className='small'>{thenew.haber_tarih}</span>
      <img src={thenew.haber_img} alt={thenew.haber_adi} />
      <p className='small'>{thenew.haber_icerik}</p>
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
