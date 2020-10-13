import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CinemaCard from '../../Card/CinemaCard';
import Spinner from '../Spinner';
import { getCinema } from '../../../store/actions/film';
import { connect } from 'react-redux';

function Cinema({ film: { cinema, loading }, getCinema }) {
  useEffect(() => {
    getCinema();
  }, [getCinema]);

  return (
    <div className='container'>
      <h1 className='medium my-2'>Sinema Salonları</h1>
      {loading || !cinema.length > 0 ? <Spinner /> : cinema.map(c => <CinemaCard key={c.id} {...c} />)}
    </div>
  );
}

Cinema.propTypes = {
  getCinema: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  film: state.film
});

export default connect(mapStateToProps, { getCinema })(Cinema);
