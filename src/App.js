import "./App.css";
import Header from "./components/Header";
import AllEntries from "./pages/AllEntries";
import SingleEntries from "./pages/SingleEntries";
import NewEntries from "./pages/NewEntries";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

function App() {
  const history = useHistory();
  function handleGoBack() {
    history.goBack();
  }
  return (
    <div className="App">
      <Switch>
        <Route path="/singleEntry/:pageId">
          <Header title={"Single Entries"} />
          <SingleEntries goBack={handleGoBack} />
        </Route>

        <Route path="/newEntry">
          <Header title={"Create New Entry"} />
          <NewEntries goBack={handleGoBack} />
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
