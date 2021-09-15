import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  TextField,
  Tooltip,
} from "@material-ui/core";
import {
  BookTwoTone,
  DeleteOutline,
  LinkTwoTone,
  SaveOutlined,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CollectionCreateStyleItem from "./CollectionCreateStyleItem";
import { withStyles } from "@material-ui/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    padding: ".8rem",
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "1rem auto",
    background: "#f5f5f6",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  input: {
    width: "100%",
    margin: " .5rem auto ",
    [theme.breakpoints.down("sm")]: {
      margin: " .2rem auto ",
    },
  },
  inputRow: {
    padding: "5px",
    width: "100%",
  },
  inputIcon: {
    fontSize: "1.5rem",
    margin: "5px 0.8rem 5px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0px",
    },
  },
  inputInput: {
    width: "90%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  inputControl: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    padding: "0 1rem",
    margin: "auto",
    width: "100%",
    "&>div": {
      display: "flex",
      justifyContent: "space-around",
      width: "30%",
      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },
    },
  },
  btn: {
    color: "#000",
    border: "0px",
    background: "#f5f5f6",
    margin: "auto 1rem ",
    width: "100%",
    padding: " 0.2rem 1rem",
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      margin: "0",
      padding: "0",
    },
  },
  btnIcon: {
    fontSize: "1.8rem",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 12,
    boxShadow: "0px 2px 5px #000",
  },
}))(Tooltip);
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
            inputProps={{ style: { fontSize: ".9rem" } }}
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
            inputProps={{ style: { fontSize: ".9rem" } }}
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
          <LightTooltip
            title="DELETE"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 10 }}
          >
            <button className={classes.btn} onClick={handleClickOpen}>
              <DeleteOutline className={classes.btnIcon} />
            </button>
          </LightTooltip>
          <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Delete this forever?"}
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
              <Button onClick={() => handleRemove(true)} autoFocus>Delete</Button>
            </DialogActions>
          </Dialog>
          <LightTooltip
            title="SAVE"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 10 }}
          >
            <button className={classes.btn} type="submit">
              <SaveOutlined className={classes.btnIcon} />
            </button>
          </LightTooltip>
        </div>
      </div>
    </form>
  );
}
export default CollectionCreateItem;
