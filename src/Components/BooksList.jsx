import { useObserver } from 'mobx-react-lite';
import { useBooksContext } from '../Common/BooksStore';
import { useAuthorsContext } from '../Common/AuthorsStore';
import { useSearchContext } from '../Stores/FiltersStore';
import BookArticle from './BookArticle';

const BooksList = () => {
  const store = useBooksContext();
  const storeAuthor = useAuthorsContext();
  const storeSearch = useSearchContext();

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
        storeSearch.search ?
          store.books.filter(el => el.title.toLowerCase().includes(storeSearch.search)).map(el => {
            return <BookArticle key={el.id} id={el.id} poster={el.poster} title={el.title} getAuthorsName={getAuthorsName} author={el.author} price={el.price} />
          })
          : store.books.map(el => {
            return <BookArticle key={el.id} id={el.id} poster={el.poster} title={el.title} getAuthorsName={getAuthorsName} author={el.author} price={el.price} />
          })
      }
    </section>
  ));
}

export default BooksList;
