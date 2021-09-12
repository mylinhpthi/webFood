import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { BookTwoTone, LinkTwoTone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CollectionCreateStyleItem from "./CollectionCreateStyleItem";
const useStyle = makeStyles({
  root: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "20px auto",
    background: "#f5f5f6",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  input: {
    width: "100%",
    margin: " 10px auto ",
  },
  inputRow: {
    padding: "5px",
  },
  inputIcon: {
    fontSize: 25,
    margin: "5px 10px",
  },
  inputInput: {
    width: "85%",
  },
  inputControl: {
    display: "flex",
    position: "relative",
    margin: "auto",
    width: "90%",
    "&>div": {
      display: "flex",
      width: "50%",
      "&>Button": {
        color: "#000",
        background: "#fff",
        margin: "10px 5px",
        width: "45%",
        "&:hover": {
          background: "#000",
          color: "#fff",
        },
      },
    },
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
    if (bool) {
      onRemove();
    }
    setOpen(false);
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
        <div className={classes.inputRow}>
          <BookTwoTone className={classes.inputIcon} />
          <TextField
            required
            value={formDataLink["label"] || ""}
            onChange={handleChange("label")}
            type="text"
            name="label"
            className={classes.inputInput}
            placeholder="Title"
          />
        </div>
        <div className={classes.inputRow}>
          <LinkTwoTone className={classes.inputIcon} />
          <TextField
            required
            value={formDataLink["link"] || ""}
            type="url"
            onChange={handleChange("link")}
            name="link"
            className={classes.inputInput}
            placeholder="http://*"
          />
        </div>
      </div>
      <div className={classes.inputControl}>
        <CollectionCreateStyleItem
          onChangeColor={(color) => handleChangeColor("color", color)}
        />
        <div>
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
                Your action will not be undone. Choose "Cancel" if you want to
                cancel.
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
      </div>
    </form>
  );
}
export default CollectionCreateItem;
