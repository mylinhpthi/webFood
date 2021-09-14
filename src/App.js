import "./App.css";
import  { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import {
  CssBaseline,
} from "@material-ui/core";
import CollectionNav from "./components/CollectionNav/CollectionNav";
import CollectionSocial from "./components/CollectionSocial/CollectionSocial";
import CollectionWebLink from "./components/CollectionWebLink/CollectionWebLink";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CollectionMenu from "./components/CollectionMenu";

const axios = Axios.create({
  baseURL: "http://localhost:8000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

function App() {
  return (
    <Router>
      <div>
        <CollectionNav />
        <Switch>
          <Route path="/social">
            <CollectionSocial />
          </Route>
          <Route path="/web">
            <CollectionWebLink />
          </Route>
          <Route path="/">
            <CollectionMenu />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
export default App;
