import { useObserver } from 'mobx-react-lite';
import { useBooksContext } from '../Stores/BooksStore';
import { useAuthorsContext } from '../Stores/AuthorsStore';

const BooksList = () => {
  const store = useBooksContext();
  const storeAuthor = useAuthorsContext();

  const getAuthorsName = (id) => {
    const found = storeAuthor.authors.find(el => el.id === id);
    return (
      <h3>
        {found.name}
      </h3>
    )
  }

  return useObserver(() => (
    <section className="full books_grid">
      {
        store.books.map(el => {

          return (
            <article key={el.id} className="article">
              <img src={el.poster} alt="poster" className="article__poster" />
              <h2>{el.title}</h2>
              {getAuthorsName(el.author)}
              <p>{el.price}</p>
            </article>
          )
        })
      }
    </section>
  ));
}

export default BooksList;
