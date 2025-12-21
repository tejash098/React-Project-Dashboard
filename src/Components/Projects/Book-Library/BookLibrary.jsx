import React, { useEffect, useState } from "react";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import "./BookLibrary.css";
import axios from "axios";

const BookLibrary = () => {
  const [ApiData, setApiData] = useState([]);

  const toggleReadStatus = (id) => {
    setApiData((prev) =>
      prev.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gutendex.com/books/?search=pride"
        );
        const booksWithReadStatus = response.data.results.map((book) => ({
          ...book,
          read: false,
        }));
        setApiData(booksWithReadStatus);
      } catch (error) {
        console.log(`Error fetching data ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="booklibrary">
        <div className="booklibrary-header">
          <h1><LibraryBooksIcon fontSize="large"/> Book Library</h1>
        </div>

        <div className="booklibrary-stats">
          <div className="stat-card">
            <p className="stat-label">Total Books</p>
            <h2 className="stat-value">{ApiData.length || 0}</h2>
          </div>
          <div className="stat-card">
            <p className="stat-label">Read</p>
            <h2 className="stat-value">
              {ApiData.filter((elem) => elem.read).length || 0}
            </h2>
          </div>
          <div className="stat-card">
            <p className="stat-label">Unread</p>
            <h2 className="stat-value">
              {ApiData.filter((elem) => !elem.read).length || 0}
            </h2>
          </div>
        </div>

        <div className="book-grid">
          {ApiData &&
            ApiData.map((elem) => {
              let { id, title, authors, formats } = elem;
              let { name } = authors[0];

              return (
                <div className="book-card" key={id}>
                  <img
                    src={formats["image/jpeg"]}
                    alt=""
                    className="book-cover"
                  />
                  <h3 className="book-title">{title}</h3>
                  <p className="book-author">{name}</p>
                  <span
                    className={`book-status ${elem.read ? "read" : "unread"}`}
                    onClick={() => toggleReadStatus(id)}
                  >
                    {elem.read ? "Read" : "Unread"}
                  </span>
                  <span className="book-site">
                    <a href={formats["text/html"]} target="_blank">
                      Visit Site
                    </a>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BookLibrary;
