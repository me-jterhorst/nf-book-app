import "./App.css";
import Header from "./components/Header";
import AllEntries from "./pages/AllEntries";
import SingleEntries from "./pages/SingleEntries";
import NewEntries from "./pages/NewEntries";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/singleEntry/:pageId">
          <Header title={"Single Entries"} />
          <SingleEntries />
        </Route>

        <Route path="/newEntry">
          <Header title={"Create New Entry"} />
          <NewEntries />
        </Route>

        <Route path="/">
          <Header title={"All the Books"} />
          <AllEntries />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
