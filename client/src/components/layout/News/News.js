import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { getNews } from '../../../store/actions/news';
import { connect } from 'react-redux';
import NewsCard from '../../Card/NewsCard';
import { Link } from 'react-router-dom';

function News({ getNews, news: { news, loading } }) {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='container'>
        <h1 className='medium my-2'>Haberler</h1>
        <div className='kartlar'>
          {news.map(thenews => {
            return (
              <Link key={thenews.id} to={`/news/${thenews.id}`}>
                <NewsCard {...thenews} />
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

News.propTypes = {
  getNews: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  news: state.news
});
export default connect(mapStateToProps, { getNews })(News);
