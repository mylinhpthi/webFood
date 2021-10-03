import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import CollectionCreate from "./CollectionCreate";
import CollectionView from "../CollectionView";
import { Grid } from "@material-ui/core";
import Scrollbars from "react-custom-scrollbars";
import CollectionFooter from "../CollectionFooter";
import { ErrorOutline } from "@material-ui/icons";
const useStyle = makeStyles((them) => ({
  root: {
    width: "90%",
    margin: " auto",
  },
  create: {
    marginTop: "30px",
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
  linkhub: {
    textAlign: "center",
    padding: "10px",
    width: "100%",
    margin: "auto",
    fontSize: ".9rem",
    background: "#fff",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
}));
function CollectionWebLink() {
  const classes = useStyle();
  const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const success = !loading && !error;
  const hasLink = data != null;
  const [user, setUser] = useState({});
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
        <div>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className={classes.root}
            id="top"
          >
            <Grid item xs={12} md={8} className={classes.create}>
              <Scrollbars autoHide style={{ minWidth: 300, minHeight: 300 }}>
                <CollectionCreate data={user} onNewData={handleChange} />
              </Scrollbars>
            </Grid>

            <Grid item xs={12} md={4} className={classes.view}>
              <div className={classes.linkhub}>
                <b>LinkHub: </b>
                <u>https://linkhub/davidTruong</u>
              </div>
              <CollectionView data={user} />
            </Grid>
          </Grid>
          <CollectionFooter />
        </div>
      )}
    </div>
  );
}

export default CollectionWebLink;
