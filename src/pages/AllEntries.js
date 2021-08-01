import "./AllEntries.css";
import Entry from "../components/Entry";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function AllEntries() {
  const [apiBooks, setApiBooks] = useState([]);

  useEffect(() => {
    if (apiBooks.length === 0) {
      const URL = `http://localhost:8080/api/books/`;
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setApiBooks(data));
    }
  }, [apiBooks]);

  return (
    <main>
      <ul className="AllEntries">
        {apiBooks.map((object) => {
          return (
            <Entry
              key={object.id}
              entryId={object.id}
              bookTitle={object.bookTitle}
              authorName={object.authorName}
              isReadStatus={object.isRead}
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
