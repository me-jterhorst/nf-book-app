import "./App.css";
import Header from "./components/Header";

/**
 *

 * Main
 *  -> AllEntries, SingleEntry, NewEntry
 *
 * AllEntries
 *  -> UL
 *  ---> LI
 * -----> DeleteBtn, InfoDiv, isReadCheck
 * -> NavToNewBtn
 *
 *
 * SingleEntry
 *  -> WrapperDiv
 *  ---> isReadCheck, Title, Author, BackBtn
 *
 * NewEntry
 *  -> FORM
 *   ---> TitleInput, AuthorInput, SubmitBtn
 *
 */

function App() {
  return (
    <div className="App">
      <Header title={"Titel"} />
      <main>
        <ul className="AllEntries">
          <li className="AllEntries-Item">
            <button className="btn btn--del">X</button>
            <div className="AllEntries-Item__content">
              <h2>Jakob Book</h2>
              <h3>MyMum</h3>
            </div>
            <button className="btn btn--check">OK</button>
          </li>
          <li className="AllEntries-Item">
            <button className="btn btn--del">X</button>
            <div className="AllEntries-Item__content">
              <h2>Bible</h2>
              <h3>Gott</h3>
            </div>
            <button className="btn btn--check">NO</button>
          </li>
        </ul>

        <button className="btn btnNav">Add +</button>
      </main>
    </div>
  );
}

export default App;
