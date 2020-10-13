import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ searchFn }) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('');
  const [yearArr, setYearArr] = useState([]);

  const handleSearch = e => {
    e.preventDefault();

    searchFn(name, type, year);
  };
  useEffect(() => {
    const arr = [];
    for (let index = 1980; index <= 2020; index++) {
      arr.push(index);
    }
    setYearArr(arr.reverse());
  }, []);

  return (
    <div className='search-box my-2'>
      <form onSubmit={handleSearch}>
        <input type='text' name='name' placeholder='Name' onChange={e => setName(e.target.value)} required />
        <select name='year' onChange={e => setYear(e.target.value)}>
          <option value=''>Year</option>
          {yearArr.map((year, i) => (
            <option value={year} key={i}>
              {year}
            </option>
          ))}
        </select>
        <div className='type my-1'>
          <input type='radio' name='type' value='movie' onChange={e => setType(e.target.value)} />
          <label htmlFor=''>Movie</label>
          <input type='radio' name='type' value='series' onChange={e => setType(e.target.value)} />
          <label htmlFor=''>Series</label>
          <input type='radio' name='type' value='episode' onChange={e => setType(e.target.value)} />
          <label htmlFor=''>Episode</label>
        </div>
        <input type='submit' value='Search' />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  searchFn: PropTypes.func.isRequired
};

export default SearchBox;
