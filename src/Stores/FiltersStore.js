import React, { createContext, useContext } from "react";
import { useLocalStore } from "mobx-react-lite";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    search: '',
    addSearchText(text) {
      store.search = text;
    }
  }));

  return (
    <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
  );
}