import "./App.css";
import Header from "./components/Header";
import AllEntries from "./pages/AllEntries";
import SingleEntries from "./pages/SingleEntries";
import NewEntries from "./pages/NewEntries";
import { Switch, Route } from "react-dom";

function App() {
  return (
    <div className="App">
      <Header title={"Titel"} />
      <Switch>
        <Route path="/singleEntry/:id">
          <SingleEntries
            isReadStatus={true}
            bookTitle="Alex Book"
            authorName="Jakob"
          />
        </Route>

        <Route path="/newEntry">
          <NewEntries />
        </Route>

        <Route path="/">
          <AllEntries />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
