import React from 'react';
import BookShelf from '../components/BookShelf';

function InProgressPage({ books, onStatusChange }) {
  return (
    <div>
      <BookShelf books={books} onStatusChange={onStatusChange} />
    </div>
  );
}

export default InProgressPage;