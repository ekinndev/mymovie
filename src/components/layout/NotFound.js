import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();
  return (
    <Fragment>
      <div className='container'>
        <h1 className='medium'>Malesef Yanlış Sayfadasınız. Yönlendiriliyorsunuz...</h1>
        {setTimeout(() => {
          history.goBack();
        }, 1000)}
      </div>
    </Fragment>
  );
};

export default NotFound;
