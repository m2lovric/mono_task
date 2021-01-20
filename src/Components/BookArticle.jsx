import { Link } from 'react-router-dom';

const BookArticle = ({ id, poster, title, getAuthorsName, author, price }) => {
  return (
    <article className="article">
      <img src={poster} alt="poster" className="article__poster" />
      <h2>{title}</h2>
      {getAuthorsName(author)}
      <p>{price}</p>
      <Link to={`/edit/${id}`}>Edit</Link>
    </article>
  )
}

export default BookArticle;