import "./NewEntries.css";
import BackBtn from "../components/BackBtn";

export default function NewEntries({ goBack }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const nameAuthor = form.nameAuthor.value;
    const bookGenre = form.bookGenre.value;

    const URL = `http://localhost:8080/api/books/`;
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({
        bookTitle,
        nameAuthor,
        bookGenre,
        isRead: false,
      }),
    });

    form.reset();
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="NewEntries">
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          required
          autoComplete="off"
          placeholder="Book Title"
        />
        <input
          type="text"
          name="nameAuthor"
          id="nameAuthor"
          required
          autoComplete="off"
          placeholder="Author Name"
        />

        <input
          type="text"
          name="bookGenre"
          id="bookGenre"
          required
          autoComplete="off"
          placeholder="Book Genre"
        />
        <button type="submit" className="btn btn--submit">
          Add your book
        </button>
      </form>
      <BackBtn onClick={goBack} />
    </main>
  );
}
