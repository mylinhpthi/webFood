import { Grid } from "@material-ui/core";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import CollectionView from "../CollectionView";
import DesignText from "../Design/DesignText";
import DesignBg from "../Design/DesignBg";
import DesignBorder from "../Design/DesignBorder";
import DesignBgItem from "../Design/DesignBgItem";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from "@mui/system";
import { ErrorOutline } from "@material-ui/icons";
import CollectionFooter from "../CollectionFooter";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
    display: "flex",
    margin: "7rem auto 5%",
    [theme.breakpoints.down("sm")]: {
      margin: "4rem auto 40px",
      height: "auto",
      flexDirection: "column-reverse",
    },
  },
  design: {
    overflow: "scroll",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "60px",
    },
  },
  title: {
    width: "70%",
    textAlign: "center",
    margin: "auto",
    marginBottom: "1rem",
    padding: "10px",
    fontSize: "1rem",
    color:'#004d40',
    // border:'1px solid red', #00695c
    "&>h4": {
      padding: "10px",
      fontSize: "1.5rem",
    },
    "&>p": {
      padding: "10px",
    },
  },
}));
function Appearance() {
  const classes = useStyles();
  const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const [user, setUser] = useState({});
  const success = !loading && !error;
  const hasLink = data != null;
  useEffect(() => {
    if (data) setUser(data);
  }, [data]);
  const handleChange = (params) => {
    if (params) setUser(params);
  };

  const [value, setValue] = useState("1");

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {loading && (
        <div id="preloader">
          <div id="loader"></div>
        </div>
      )}
      {error && (
        <div id="error">
          <ErrorOutline className="errorIcon" />
          <h4>Sorry something when wrong.</h4>
        </div>
      )}
      {success && !hasLink && (
        <div id="error">
          <ErrorOutline className="errorIcon" />
          <h4>Sorry something when wrong.</h4>
        </div>
      )}
      {success && hasLink && (
        <div>
          <Grid
            container
            alignItems="center"
            columns={{ xs: 12 }}
            className={classes.root}
          >
            <Grid item xs={12} md={7} className={classes.view}>
              <CollectionView data={user} />
            </Grid>
            <Grid item xs={12} md={5} className={classes.design}>
              <div className={classes.title}>
                <h4>APPEARANCE</h4>
                <p>
                  Hi, <br />
                  Design and apply color schemes to your interface, and measure
                  the accessibility of any color combination. Let's do it now!
                </p>
              </div>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleTabs}
                    aria-label="basic tabs example"
                  >
                    <Tab label="TextColor" value="1" />
                    <Tab label="Background Link" value="2" />
                    <Tab label="Background" value="3" />
                    <Tab label="Border color" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <DesignText data={user} onNewData={handleChange} />
                </TabPanel>
                <TabPanel value="2">
                  <DesignBgItem data={user} onNewData={handleChange} />
                </TabPanel>
                <TabPanel value="3">
                  <DesignBg data={user} onNewData={handleChange} />
                </TabPanel>
                <TabPanel value="4">
                  <DesignBorder data={user} onNewData={handleChange} />
                </TabPanel>
              </TabContext>
            </Grid>
          </Grid>
          <CollectionFooter />
        </div>
      )}
    </div>
  );
}

export default Appearance;
