import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import {
  BookTwoTone,
  LinkTwoTone,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CollectionCreateStyleItem from "./CollectionCreateStyleItem";
const useStyle = makeStyles({
  root: {
    border: "3px solid #fff",
    marginBottom: "10px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
  },
  input__control: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    position: "relative",
    margin: "5px auto",
    width: "70%",
    "&>Button": {
      border: "1px solid #fff",
      color: "#000",
      marginBottom: "5px",
      background: "#fff",
      margin: "5px",
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
  input__icon: {
    height: "100%",
    fontSize: 25,
    marginRight: "10px",
  },
  input: {
    margin: "10px auto",
  },
});
function CollectionCreateItem({ onRemove, onNewData, item }) {
  const classes = useStyle();
  const [formDataLink, setFormDataLink] = useState({});
  const handleChange = (field) => (event) =>
    setFormDataLink((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
    const handleChangeColor = (field, color) => 
    setFormDataLink((prev) => ({
      ...prev,
      [field]: color,
    }));
  const handleSubmit = (event) => {
    event.preventDefault();
    onNewData(formDataLink);
  };
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleRemove = (bool) => {
    if(bool){
    onRemove();
    setOpen(false);
    }
  };
  useEffect(() => {
    if (item) {
      const { label, link, textColor } = item || {};
      setFormDataLink({ label, link, textColor });
    }
  }, [item]);

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.input}>
        <Grid container alignItems="flex-end">
          <Grid item xs={12}>
            <BookTwoTone className={classes.input__icon} />
            <TextField
              required
              value={formDataLink["label"] || ""}
              onChange={handleChange("label")}
              type="text"
              name="label"
            
              style={{ width: "80%"}}
              id="input-with-icon-grid"
              placeholder="Title"
            />
          </Grid>
          <Grid item xs={12}>
            <LinkTwoTone className={classes.input__icon} />
            <TextField
              required
              value={formDataLink["link"] || ""}
              type="url"
              onChange={handleChange("link")}
              name="link"
              style={{ width: "80%" }}
              placeholder="http://*"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.input__control}>
        <CollectionCreateStyleItem onChangeColor ={(color) => handleChangeColor("color", color)}/>
        <Button size="small" variant="contained" onClick={handleClickOpen}>
          Remove
        </Button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Remove this forever?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your action will not be undone. Choose "Cancel" if you want to cancel.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleRemove(false)} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => handleRemove(true)}
              color="primary"
              autoFocus
            >
              Remove
            </Button>
          </DialogActions>
        </Dialog>
        <Button type="submit" size="small" variant="contained">
          Save
        </Button>
      </div>
    </form>
  );
}
export default CollectionCreateItem;
