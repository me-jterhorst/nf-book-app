import "./App.css";
import Header from "./components/Header";
import AllEntries from "./pages/AllEntries";

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
      <AllEntries />
    </div>
  );
}

export default App;
