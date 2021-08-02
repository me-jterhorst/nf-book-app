import "./AllEntries.css";
import Entry from "../components/Entry";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AllEntries() {
  const [apiBooks, setApiBooks] = useState([]);
  const [isDatabaseChanged, setDatabaseChanged] = useState(false);
  useEffect(() => {
    const URL = `http://localhost:8080/api/books/`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setApiBooks(data);
      });
  }, [isDatabaseChanged]);

  function handleOnDelete(entryId) {
    const URL = `http://localhost:8080/api/books/${entryId}`;

    fetch(URL, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    setDatabaseChanged(!isDatabaseChanged);
  }

  function handleOnStatusChange(entryId, isReadStatus) {
    const URL = `http://localhost:8080/api/books/${entryId}`;

    fetch(URL, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        isRead: !isReadStatus,
      }),
    });

    setDatabaseChanged(!isDatabaseChanged);
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
              onStatusChange={() =>
                handleOnStatusChange(object._id, object.isRead)
              }
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
