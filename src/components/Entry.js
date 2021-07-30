import "./Entry.css";

export default function Entry({ bookTitle, authorName, isReadStatus }) {
  return (
    <li className="AllEntries-Item">
      <button className="btn btn--del">X</button>
      <div className="AllEntries-Item__content">
        <h2>{bookTitle}</h2>
        <h3>{authorName}</h3>
      </div>
      <button className="btn btn--check">{isReadStatus ? "OK" : "NO"}</button>
    </li>
  );
}
