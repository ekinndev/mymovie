import React from 'react';
import PropTypes from 'prop-types';

const TheNews = ({ news }) => {
  return (
    <div className='container py-3'>
      <h1 className='large my-2'>Ekin Abalıoğlu Hangi Filmde Oynayacak?</h1>
      <span className='small'>2010 - IMDB:5 - Aksiyon</span>
      <img
        src='https://www.log.com.tr/wp-content/uploads/2019/07/spider-man-far-from-home-sonrasi-tom-holland-ve-marvel-anlasmasi.jpg'
        alt='Örümcek Adam'
      />
      <p className='small'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero cumque tenetur nostrum quo officiis voluptatum,
        itaque quas possimus, nemo libero unde. Earum totam cupiditate asperiores, officiis nam quo ipsa illum! Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Vero cumque tenetur nostrum quo officiis voluptatum, itaque
        quas possimus, nemo libero unde. Earum totam cupiditate asperiores, officiis nam quo ipsa illum! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Vero cumque tenetur nostrum quo officiis voluptatum, itaque quas
        possimus, nemo libero unde. Earum totam cupiditate asperiores, officiis nam quo ipsa illum!
      </p>
    </div>
  );
};

TheNews.propTypes = {};

export default TheNews;
