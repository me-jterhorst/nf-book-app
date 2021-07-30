import "./Entry.css";
import { Link } from "react-router-dom";

export default function Entry({
  entryId,
  bookTitle,
  authorName,
  isReadStatus,
}) {
  return (
    <li className="AllEntries-Item">
      <button className="btn btn--del">X</button>
      <Link to={`/singleEntry/${entryId}`}>
        <div className="AllEntries-Item__content">
          <h2>{bookTitle}</h2>
          <h3>{authorName}</h3>
        </div>
      </Link>
      <button className="btn btn--check">{isReadStatus ? "OK" : "NO"}</button>
    </li>
  );
}
