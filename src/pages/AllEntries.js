import "./AllEntries.css";
import Entry from "../components/Entry";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AllEntries() {
  const [apiBooks, setApiBooks] = useState([]);
  const [isDatabaseChanged, setDatabaseChanged] = useState(false);

  useEffect(() => {
    if (apiBooks.length === 0 || isDatabaseChanged === true) {
      const URL = `http://localhost:8080/api/books/`;
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setApiBooks(data);
          setDatabaseChanged(false);
          console.log(data);
        });
    }
  }, [apiBooks, isDatabaseChanged]);

  function handleOnDelete(entryId) {
    const URL = `http://localhost:8080/api/books/${entryId}`;

    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    setDatabaseChanged(true);
  }

  return (
    <main>
      <ul className="AllEntries">
        {apiBooks.map((object) => {
          return (
            <Entry
              key={object._id}
              entryId={object._id}
              bookTitle={object.bookTitle}
              authorName={object.nameAuthor}
              isReadStatus={object.isRead}
              onDelete={() => handleOnDelete(object._id)}
            />
          );
        })}
      </ul>

      <NavLink to="/newEntry" className="btn btnNav">
        Add +
      </NavLink>
    </main>
  );
}
