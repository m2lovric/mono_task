import React, { useState } from 'react';
import { useAuthorsContext } from '../Stores/AuthorsStore';

const AddAuthor = () => {
  const storeAuthors = useAuthorsContext();

  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    storeAuthors.addAuthor(name);
    setName('');
  }

  return (
    <form onSubmit={submitForm} className="form">
      <h1>Add Author</h1>
      <label htmlFor="name">Name: </label>
      <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button>Submit</button>
    </form>
  )
}

export default AddAuthor;