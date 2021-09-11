import "./App.css";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import CollectionCreate from "./components/CollectionCreate";
import CollectionView from "./components/CollectionView";
import { createTheme } from '@material-ui/core/styles';
import {
  CssBaseline,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CollectionNav from "./components/CollectionNav";
const axios = Axios.create({
  baseURL: "http://localhost:8000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });
const useStyle = makeStyles((them) => ({
  root: {
    width: "95%",
    margin: " 20px auto"
  },
  view: {
    maxHeight: "600px",
  },
  
}));
function App() {
  const classes = useStyle();
  const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const [user, setUser] = useState({});
  const success = !loading && !error;
  const hasLink = data != null;
  const handleChange = (params) => {
    if (params) setUser(params);
  };
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
  return (
    <div>
      <CssBaseline />
      <CollectionNav />
      {loading && <em>Loading....</em>}
      {error && <em>An error occurs, try again</em>}
      {success && !hasLink && <em>No data</em>}
      {success && hasLink && (
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={12} md={6} className={classes.create}>
            <CollectionCreate data={user} onNewData={handleChange} />
          </Grid>
          <Grid item xs={12} md={6} className={classes.view}>
            <CollectionView data={user} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}
export default App;
