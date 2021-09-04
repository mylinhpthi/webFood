import { Grid, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import useAxios from "axios-hooks";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const useStyle = makeStyles({
  margin:{
    margin: '10px'
  }
})
function CollectionCreateItem({index, onReceive}) {
  const classes = useStyle();
  const [formDataLink, setFormDataLink] = useState({});
  const [{ data: CollectionLink, loading, error }] = useAxios(
    `LinkCollection/5`
  );
  const success = !loading && !error;

// Create
  const [
    { loading: uLoading, error: uError, response: uResponse },
    updateLink,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const uSuccess = uResponse && uResponse.status === 201;

  const handleChange = (field) => (event) =>
    setFormDataLink((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLink({data :{webLinks:[...CollectionLink.webLinks,formDataLink]}})
  };
  const isReady =  (CollectionLink && success);
  
  const handleRemove = ()=>{
      onReceive(index);
  }
  return (
    <form key={index} onSubmit={handleSubmit} className="link__item">
      <div className="link__input">
        <div>
          <label htmlFor="link_label">Label</label>
          <input
            value={formDataLink["label"] || ""}
            onChange={handleChange("label")}
            type="text"
            placeholder="label"
            name="label"
            id=""
          />
        </div>
        <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
        <div>
          <label htmlFor="link">URL</label>
          <input
            value={formDataLink["link"] || ""}
            type="text"
            onChange={handleChange("link")}
            placeholder="http://"
            name="link"
            id=""
          />
        </div>
      </div>
      <div className="link__button">
        <button onClick={handleRemove}>Remove</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

export default CollectionCreateItem;
