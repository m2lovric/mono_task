import { useState, createContext, useContext } from 'react';
import { useLocalStore, useObserver } from "mobx-react-lite";
import { useAuthorsContext } from '../Common/AuthorsStore';
import { useSearchContext } from '../Stores/FiltersStore';

const Filters = () => {
  const [author, setAuthor] = useState('');

  const storeAuthors = useAuthorsContext();
  const storeSearch = useSearchContext();

  return useObserver(() => (
    <section>
      <label htmlFor="search">Title Search: </label>
      <input name="search" type="text" onChange={(e) => storeSearch.addSearchText(e.target.value)} />

      <select name="price" id="">
        <option value="high">Price High to Low</option>
        <option value="low">Price Low to High</option>
      </select>

      <select name="price" id="">
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
      </select>

      <select name="author" value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="">Author</option>
        {
          storeAuthors.authors.map(el => {
            return (
              <option value={el.id} key={el.id}>{el.name}</option>
            )
          })
        }
      </select>
    </section>
  ));
}

export default Filters;