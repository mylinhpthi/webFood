import { Grid, makeStyles } from "@material-ui/core";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import CollectionCreate from "./CollectionCreate";
import CollectionView from "./CollectionView";
const useStyle = makeStyles((them) => ({
  root: {
    width: "100%",
    margin: " 20px auto",
  },
  view: {
    maxHeight: "600px",
  },
}));
function CollectionWebLink() {
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
      {error && <em style={{textAlign:'center'}}>An error occurs, try again</em>}
      {success && !hasLink && <em style={{textAlign:'center'}}>No data</em>}
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

export default CollectionWebLink;
