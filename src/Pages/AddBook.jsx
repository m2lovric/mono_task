import React, { useState } from 'react'
import { useObserver } from 'mobx-react-lite';
import { useAuthorsContext } from '../Common/AuthorsStore'
import { useBooksContext } from '../Common/BooksStore';

const AddBook = () => {
  const storeBooks = useBooksContext();
  const storeAuthors = useAuthorsContext();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);
  const [poster, setPoster] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    storeBooks.addBook(title, author, price, poster);
    setTitle('');
    setAuthor('');
    setPrice(0);
    setPoster('');
  }

  return useObserver(() =>
  (
    <form onSubmit={submitForm} className="form form__addBook">
      <h1>Add Book</h1>
      <label htmlFor="title">Title: </label>
      <input name="title" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <label htmlFor="price">Price</label>
      <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} value={price} />
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
      <label htmlFor="poster">Poster url</label>
      <input type="url" name="poster" value={poster} onChange={(e) => setPoster(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  ));
}

export default AddBook;
