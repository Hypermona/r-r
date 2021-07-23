import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Registration from "./Components/registeration";
import Success from "./Components/success";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Registration />
        </Route>
        <Route exact path="/home">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
