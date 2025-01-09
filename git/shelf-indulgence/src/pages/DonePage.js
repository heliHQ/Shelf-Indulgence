import React from 'react';
import BookShelf from '../components/BookShelf';

function DonePage({ books, onStatusChange }) {
  return (
    <div>
      <BookShelf books={books} onStatusChange={onStatusChange} />
    </div>
  );
}

export default DonePage;
