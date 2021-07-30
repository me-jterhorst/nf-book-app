import "./SingleEntries.css";

export default function SingleEntries({ isReadStatus, bookTitle, authorName }) {
  return (
    <main className="SingleEntry">
      <section>
        <p>{isReadStatus ? "OK" : "NO"}</p>
        <h2>{bookTitle}</h2>
        <h3>{authorName}</h3>
        <button className="btn btn--back">Go Back</button>
      </section>
    </main>
  );
}
