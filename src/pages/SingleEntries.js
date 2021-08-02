import "./SingleEntries.css";
import BackBtn from "../components/BackBtn";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SingleEntries({
  goBack,
  isReadStatus,
  bookTitle,
  authorName,
}) {
  const [book, setBook] = useState({});
  const { pageId } = useParams();

  useEffect(() => {
    if (Object.entries(book).length === 0) {
      const URL = `http://localhost:8080/api/books/${pageId}`;

      fetch(URL)
        .then((response) => response.json())
        .then((bookObj) => setBook(bookObj));
    }
  }, [book, pageId]);

  return (
    <main className="SingleEntry">
      <section>
        <p>{book.isRead ? "OK" : "NO"}</p>
        <h2>{book.bookTitle}</h2>
        <h3>{book.nameAuthor}</h3>
        <h4>{book.bookGenre}</h4>
        <h5>{pageId}</h5>
        <BackBtn onClick={goBack} />
      </section>
    </main>
  );
}
