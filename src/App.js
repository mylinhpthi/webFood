import "./App.css";
import  useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import CollectionNav from "./components/CollectionNav/CollectionNav";
import CollectionSocial from "./components/CollectionSocial/CollectionSocial";
import CollectionWebLink from "./components/CollectionWebLink/CollectionWebLink";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CollectionMenu from "./components/CollectionMenu";
import CollectionView from "./components/CollectionView";
import { useEffect, useState } from "react";

const axios = Axios.create({
  baseURL: "http://localhost:8000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

function App() {
  const [{ data}] = useAxios("LinkCollection/5");
  const [user, setUser] = useState({});
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
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
          <Route path="/user">
            <CollectionView data={user}/>
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
