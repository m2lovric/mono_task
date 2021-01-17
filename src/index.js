import React from "react";
import ReactDOM from "react-dom";

import "./sass/app.scss";
import Home from "./Pages/Home";
import { BooksProvider } from "./Stores/BooksStore";

ReactDOM.render(
  <BooksProvider>
    <Home />
  </BooksProvider>,
  document.getElementById("root")
);
