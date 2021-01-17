import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";

const BooksContext = createContext();

export const useBooksContext = () => useContext(BooksContext);

export const BooksProvider = ({ children }) => {
  const store = useLocalStore(() => {
    const books = [
        {
          id: uuidv4(),
          title: "Leviathan Wakes",
          price: 19.0,
          poster:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8414/9781841499888.jpg",
        },
        {
          id: uuidv4(),
          title: "Caliban's War",
          price: 24.5,
          poster:
            "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/3161/9780316129060.jpg",
        },
      ],
      addBook = (title, price) => {
        store.books.push({
          id: uuidv4(),
          title,
          price,
        });
      };
  });

  return (
    <BooksContext.Provider value={store}>{children}</BooksContext.Provider>
  );
};
