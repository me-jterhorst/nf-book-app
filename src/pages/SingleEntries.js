import "./SingleEntries.css";
import BackBtn from "../components/BackBtn";
import { useParams } from "react-router-dom";

export default function SingleEntries({ isReadStatus, bookTitle, authorName }) {
  const book = {
    id: "3",
    bookTitle: "Boris Book",
    authorName: "Jakob",
    isRead: true,
    bookGenre: "Science Fiction",
    createdAt: "30.07.2021-past",
    updatedAt: "30.07.2021-later",
  };

  const { pageId } = useParams();

  return (
    <main className="SingleEntry">
      <section>
        <p>{book.isRead ? "OK" : "NO"}</p>
        <h2>{book.bookTitle}</h2>
        <h3>{book.authorName}</h3>
        <h4>{book.bookGenre}</h4>
        <BackBtn />
      </section>
    </main>
  );
}
