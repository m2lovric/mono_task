import { useState, useEffect } from 'react';
import { useAuthorsContext } from "../Common/AuthorsStore";
import { useBooksContext } from "../Common/BooksStore";
import { useObserver } from 'mobx-react-lite';

const Edit = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [poster, setPoster] = useState('');
  const [author, setAuthor] = useState('');
  const [authorId, setAuthorId] = useState('');

  const store = useBooksContext();
  const storeAuthors = useAuthorsContext();

  const id = props.match.params.id;

  useEffect(() => {
    store.books.filter(el => el.id === id).map((book) => {
      setAuthorId(book.author);
    })
  }, [])

  return useObserver(() => (
    <>
      {
        store.books.filter(el => el.id === id).map((book) => {
          return (
            <section>
              <h3>Current title: {book.title}</h3>
              <label htmlFor="title">Change title: </label>
              <input type="text" name="title" />
              <p>Current price: {book.price}</p>
              <label htmlFor="price">Change price: </label>
              <input type="number" name="price" step="0.01" />
              <p>Current poster url: {book.poster}</p>
              <label htmlFor="poster">Change poster url: </label>
              <input type="url" name="poster" />
            </section>
          )
        })
      }

      {
        storeAuthors.authors.filter(el => el.id === authorId).map(el => {
          return <p>Current Author: {el.name}</p>
        })
      }

      <p>Change author: </p>
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
    </>
  ));
}

export default Edit;