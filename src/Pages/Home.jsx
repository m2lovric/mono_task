import React from 'react';
import BooksList from '../Components/BooksList';
import Filters from '../Components/Filters';

const Home = () => {

  return (
    <>
      <Filters />
      <BooksList />
    </>
  )
}

export default Home;