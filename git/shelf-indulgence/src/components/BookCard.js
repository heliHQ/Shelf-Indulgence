import React from 'react';
import './BookCard.css';

function BookCard({ book, onStatusChange }) {
  const handleChange = (event) => {
    onStatusChange(book.id, event.target.value);
  };

  return (
    <div className="book-card">
      <div className="book-cover-container">
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          <img src={book.cover} alt={book.title} className="book-cover" />
        </a>
        <div className="book-info">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      </div>
      <select
        value={book.status}
        onChange={handleChange}
        className="status-dropdown"
      >
        <option value="to-read">To Read</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default BookCard;

