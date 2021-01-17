import React from 'react';
import BooksList from '../Components/BooksList';
import AuthorsList from '../Components/AuthorsList'

const Home = () => {

  return (
    <main>
      <AuthorsList />
      <BooksList />
    </main>
  )
}

export default Home;