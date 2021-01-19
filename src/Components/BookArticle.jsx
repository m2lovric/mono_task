const BookArticle = ({ id, poster, title, getAuthorsName, author, price }) => {
  return (
    <article key={id} className="article">
      <img src={poster} alt="poster" className="article__poster" />
      <h2>{title}</h2>
      {getAuthorsName(author)}
      <p>{price}</p>
    </article>
  )
}

export default BookArticle;