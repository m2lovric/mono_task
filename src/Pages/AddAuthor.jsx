import React from 'react';

const AddAuthor = () => {
  return (
    <form action="">
      <h1>Add Author</h1>
      <label htmlFor="name">Name: </label>
      <input name="name" type="text" />
      <button>Submit</button>
    </form>
  )
}

export default AddAuthor;