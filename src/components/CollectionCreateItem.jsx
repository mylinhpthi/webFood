import { Button, createTheme, Grid, TextField } from "@material-ui/core";
import {
  AccountCircle,
  BookTwoTone,
  Label,
  Link,
  LinkTwoTone,
} from "@material-ui/icons";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import useAxios from "axios-hooks";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const useStyle = makeStyles({
  root: {
    border: "3px solid #fff",
    marginBottom: "10px",
    padding: "15px",
    display:'flex',
    flexDirection:'column',
    width:'80%',
    margin:'auto'
  },
  input__control: {
    display: "flex",
    justifyContent: "space-around",
    margin:'5px auto',
    width: "70%",
    "&>Button": {
      border: "1px solid #fff",
      color: "#000",
      marginBottom: "5px",
      background: "#fff",
      margin: "5px",
      "&:hover": {
        background: "#000",
        color:"#fff"
      },
    },
  },
  input__icon: {
    height: "100%",
    fontSize:25,
    marginRight: "10px",
  },
  input: {
    margin: '10px auto'
  },
});

function CollectionCreateItem({ index, onReceive, item }) {
  const classes = useStyle();
  const [formDataLink, setFormDataLink] = useState({});
  const [{ data: CollectionLink, loading, error }] =
    useAxios(`LinkCollection/5`);
  const success = !loading && !error;
  // Create
  const [
    { loading: cLoading, error: cError, response: cResponse },
    createLink,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const cSuccess = cResponse && cResponse.status === 201;
  const handleChange = (field) => (event) =>
    setFormDataLink((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    createLink({
      data: { webLinks: [
        ...CollectionLink.webLinks.slice(0, index),
        formDataLink, 
        ...CollectionLink.webLinks.slice(index+1)
        
      
      ] },
    });
  };
  const isReady = CollectionLink && success;

  const handleRemove = () => {
    onReceive(index);
    createLink({
      data: { webLinks: [
        ...CollectionLink.webLinks.slice(0, index),
        ...CollectionLink.webLinks.slice(index+1)
      ] },
    });
  };
  useEffect(() => {
    if (isReady) {
      const { label, link } = item || {};
      setFormDataLink({ label, link });
      console.log({ label, link });
    }
  }, [isReady]);
  return (
    <form key={index} className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.input}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12}>
            <BookTwoTone className={classes.input__icon} />
            <TextField
              value={formDataLink["label"] || ""}
              onChange={handleChange("label")}
              type="text"
              name="label"
              style={{width: '80%'}}
              id="input-with-icon-grid"
              placeholder="Title"
            />
          </Grid>
          <Grid item xs={12}>
            <LinkTwoTone className={classes.input__icon} />
            <TextField
              value={formDataLink["link"] || ""}
              type="text"
              onChange={handleChange("link")}
              name="link"
              style={{width: '80%'}}
              placeholder="http://"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.input__control}>
        <Button size="small" variant="contained" onClick={handleRemove}>
          Remove
        </Button>
        <Button type="submit" size="small" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
}

export default CollectionCreateItem;
