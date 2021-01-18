import React from 'react';
import BooksList from '../Components/BooksList';
import AuthorsList from '../Components/AuthorsList'

const Home = () => {

  return (
    <>
      <AuthorsList />
      <BooksList />
    </>
  )
}

export default Home;