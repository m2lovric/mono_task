import React from 'react';
import { Route, Switch, Link } from "react-router-dom";

import AddBook from '../Pages/AddBook';
import AddAuthor from '../Pages/AddAuthor';
import Home from '../Pages/Home';

const Header = () => {
  return (
    <header>
      <Link to="/">BookStore</Link>
      <div>
        <Link to="/addbook">Add Book</Link>
        <Link to="/addauthor">Add Author</Link>
      </div>


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addbook">
          <AddBook />
        </Route>
        <Route exact path="/addauthor">
          <AddAuthor />
        </Route>
      </Switch>
    </header>
  )
}

export default Header;