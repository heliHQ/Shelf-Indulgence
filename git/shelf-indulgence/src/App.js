import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReadPage from './pages/ReadPage';
import InProgressPage from './pages/InProgressPage';
import DonePage from './pages/DonePage';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'LaserWriter II',
      author: 'Tamara Shopsin',
      cover: '/images/laserwriter-ii.jpg', // Replace with actual image URL
      status: 'to-read',
      url: 'https://www.goodreads.com/book/show/56269270-laserwriter-ii',
    },
    {
      id: 2,
      title: 'Broad Band',
      author: 'Claire L. Evans',
      cover: '/images/broadband.jpg',
      status: 'to-read',
      url: 'https://www.goodreads.com/book/show/35953464-broad-band',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    // Update the status of the selected book
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ReadPage books={books.filter((book) => book.status === 'to-read')} onStatusChange={handleStatusChange} />
          }
        />
        <Route
          path="/in-progress"
          element={
            <InProgressPage
              books={books.filter((book) => book.status === 'in-progress')}
              onStatusChange={handleStatusChange}
            />
          }
        />
        <Route
          path="/done"
          element={
            <DonePage books={books.filter((book) => book.status === 'done')} onStatusChange={handleStatusChange} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
