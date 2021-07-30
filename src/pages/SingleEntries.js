import "./SingleEntries.css";
import BackBtn from "../components/BackBtn";

export default function SingleEntries({ isReadStatus, bookTitle, authorName }) {
  return (
    <main className="SingleEntry">
      <section>
        <p>{isReadStatus ? "OK" : "NO"}</p>
        <h2>{bookTitle}</h2>
        <h3>{authorName}</h3>
        <BackBtn />
      </section>
    </main>
  );
}
