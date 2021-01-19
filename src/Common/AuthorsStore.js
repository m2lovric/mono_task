import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";
import { v4 as uuidv4 } from "uuid";

const AuthorsContext = createContext();

export const useAuthorsContext = () => useContext(AuthorsContext);

export const AuthorsProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    authors: [
      {
        id: 'authoridjames',
        name: "James S. A. Corey",
        books: [],
      },
    ],

    addAuthor(name) {
      store.authors.push({
        id: uuidv4(),
        name,
        books: [],
      });
    }
  }));
  
  return (
    <AuthorsContext.Provider value={store}>{children}</AuthorsContext.Provider>
  );
};
