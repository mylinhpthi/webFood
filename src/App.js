import "./App.css";
import logo from './images/logo.png';
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import CollectionCreate from "./components/CollectionCreate";
import CollectionView from "./components/CollectionView";
import {
  Button,
  Card,
  CardMedia,
  CssBaseline,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Height } from "@material-ui/icons";
import { useEffect, useState } from "react";
const axios = Axios.create({
  baseURL: "http://localhost:8000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });
const useStyle = makeStyles({
  root: {
    marginTop: "100px",
    width: "95%",
    margin: " 20px auto",
  },
  create: {},
  view: {
    maxHeight: "600px",
  },
  navbar: {
    width: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
  },
  navbar__content: {
    width: "60%",
    float: "right",
  },
  navbar__logo: {
    width: "15%",
    
  },
});

function App() {
  const classes = useStyle();
  const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const [user, setUser] = useState({});
  const success = !loading && !error;
  const hasLink = data != null;
  const handleChange = () => {
    setUser(data);
  };
  useEffect(() => {
    if (data) setUser(data);
  }, [data]);
  const [value, setValue] = useState(0);
  const handleChangeNavbar = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <CssBaseline />
      {/* Navbar */}
      <Paper className={classes.navbar}>
        <CardMedia
          className={classes.navbar__logo}
          image={logo}
          title="Paella dish"
        />
        <div className={classes.navbar__content}>
          <Tabs
            value={value}
            onChange={handleChangeNavbar}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Features" />
            <Tab label="About us" />
            <Tab label="Help" />
            <Tab label="Pricing" />
          </Tabs>
        </div>
      <Button>Log out</Button>
      </Paper>

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
          <Grid item xs={6} className={classes.create}>
            <CollectionCreate data={user} onChange={handleChange} />
          </Grid>
          <Grid item xs={6} className={classes.view}>
            <CollectionView data={user} />
          </Grid>
        </Grid>
      )}


    </div>
  );
}

export default App;
