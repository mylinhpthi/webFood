import "./App.css";
import logo from "./images/logo.png";
import useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import CollectionCreate from "./components/CollectionCreate";
import CollectionView from "./components/CollectionView";
import Fade from '@material-ui/core/Fade';
import {
  Button,
  Card,
  CardMedia,
  CssBaseline,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Tab,
  Tabs,
} from "@material-ui/core";
import { ContactSupport, QueuePlayNext, Apps, ExpandMore, MoreVert, ExitToApp } from "@material-ui/icons";
import { useEffect, useState } from "react";
const axios = Axios.create({
  baseURL: "http://localhost:8000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });
const useStyle = makeStyles((them)=>({
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
    width: "70%",
    display:'flex',
    justifyContent:'flex-end',
    [them.breakpoints.down('xs')]: {
      display:'none'
    },
  },
  navbar__logo: {
    width: '15%',
  },
  fade_menu:{
    display:'none',
    width:'10%',
    [them.breakpoints.down('xs')]: {
      display:'inline-block',
    },
  }
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
    if (data) setUser(data);
  }, [data]);
  // Nav
  const [value, setValue] = useState(0);
  const handleChangeNavbar = (event, newValue) => {
    setValue(newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // Nav
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
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >
            <Tab icon={<Apps />} label="FEATURES" />
            <Tab icon={<QueuePlayNext />} label="ABOUT US" />
            <Tab icon={<ContactSupport />} label="SUPPORT" />
            <Tab icon={<ExitToApp />} label="LOG OUT" />
          </Tabs>
          </div>
        
        <div className={classes.fade_menu}>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
           <Button>More...</Button>
          </IconButton>
          <Menu
            
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Features</MenuItem>
            <MenuItem onClick={handleClose}>Support</MenuItem>
            <MenuItem onClick={handleClose}>About us</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          </div>
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
