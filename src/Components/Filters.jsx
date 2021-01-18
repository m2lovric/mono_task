import { useState } from 'react';
import { useAuthorsContext } from '../Stores/AuthorsStore';

const Filters = () => {
  const storeAuthors = useAuthorsContext();
  const [author, setAuthor] = useState('');

  return (
    <section>
      <label htmlFor="search">Search: </label>
      <input name="search" type="text" />

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
  )
}

export default Filters;