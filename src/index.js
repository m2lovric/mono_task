import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Layout from './Layout/Layout';

import "./sass/app.scss";
import { BooksProvider } from "./Common/BooksStore";
import { AuthorsProvider } from "./Common/AuthorsStore";

ReactDOM.render(
  <BrowserRouter>
    <AuthorsProvider>
      <BooksProvider>
        <Layout />
      </BooksProvider>
    </AuthorsProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
