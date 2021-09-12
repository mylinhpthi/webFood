import "./App.css";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import {
  CssBaseline,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CollectionNav from "./components/CollectionNav";
import CollectionWebLink from "./components/CollectionWebLink";
const axios = Axios.create({
  baseURL: "http://localhost:8000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

function App() {
  // const [{ data, loading, error }] = useAxios("LinkCollection/5");
  // const [user, setUser] = useState({});
  // const success = !loading && !error;
  // const hasLink = data != null;
  // const handleChange = (params) => {
  //   if (params) setUser(params);
  // };
  // useEffect(() => {
  //   if (data) {
  //     setUser(data);
  //   }
  // }, [data]);
  return (
    <div>
      <CssBaseline />
      <CollectionNav />
      <CollectionWebLink />
    </div>
  );
}
export default App;
