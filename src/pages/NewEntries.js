import "./NewEntries.css";
import BackBtn from "../components/BackBtn";

export default function NewEntries() {
  return (
    <main>
      <form className="NewEntries">
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          required
          autocomplete="off"
          placeholder="Book Title"
        />
        <input
          type="text"
          name="authorName"
          id="authorName"
          required
          autocomplete="off"
          placeholder="Author Name"
        />
        <button type="submit" className="btn btn--submit">
          Add your book
        </button>
      </form>
      <BackBtn />
    </main>
  );
}
