import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ErrorOutline } from "@material-ui/icons";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import CollectionView from "../CollectionView";
import CollectionCreate from "./CollectionCreate";
const useStyle = makeStyles((them) => ({
  root: {
    width: "100%",
    margin: " 20px auto",
  },
  create: {
    marginTop: "40px",
    [them.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  view: {
    maxHeight: "600px",
    marginTop: "45px",
    [them.breakpoints.down("sm")]: {
      margin: "10px auto",
    },
  },
}));
function CollectionSocial() {
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
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className={classes.root}
        >
          <Grid item xs={12} md={8} className={classes.create}>
            <CollectionCreate data={user} onNewData={handleChange} />
          </Grid>
          <Grid item xs={12} md={4} className={classes.view}>
            <CollectionView data={user} />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default CollectionSocial;
