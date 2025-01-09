import React from 'react';
import BookCard from './BookCard';
import './BookShelf.css';

function BookShelf({ books, onStatusChange }) {
  return (
    <div className="bookshelf">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
}

export default BookShelf;
