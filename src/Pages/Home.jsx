import React from 'react';
import BooksList from '../Components/BooksList';
import Filters from '../Components/Filters';
import { SearchProvider } from '../Stores/FiltersStore';

const Home = () => {

  return (
    <SearchProvider>
      <Filters />
      <BooksList />
    </SearchProvider>
  )
}

export default Home;