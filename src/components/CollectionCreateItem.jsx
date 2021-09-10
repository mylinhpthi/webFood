import {
  Button,
  createTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fade,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import { green, purple } from "@material-ui/core/colors";
import {
  BookTwoTone,
  CropOriginal,
  LinkTwoTone,
  PhotoCamera,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import useAxios from "axios-hooks";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  text_colors: {
    display: "flex",
    margin: "auto ",
    padding: 0,
    listStyle: "none",
    transform: "rotate(45deg)",
    cursor: "pointer",
  },
  text_color: {
    width: "1em",
    height: " 1em",
    borderRadius: "50%",
    position: " relative",
    display: "block",
    "&:nth-child(1)": {
      transform: "rotate(calc(90deg*1))",
      transformOrigin: "1.2rem .6rem ",
    },
    "&:nth-child(2)": {
      transform: "rotate(calc(90deg*1))",
      transformOrigin: "1.1rem .5rem ",
    },
    "&:nth-child(3)": {
      transform: "rotate(calc(90deg*1))",
      transformOrigin: "-0.05rem 0.1rem ",
    },
    "&:nth-child(4)": {
      transform: "rotate(calc(90deg*1))",
      transformOrigin: "-.05rem 0rem ",
    },
  },
  style: {
    display: "flex",
    justifyContent: "space-around",
    position: "relative",
  },
});
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 12,
    boxShadow: "0px 2px 5px #000",
  },
}))(Tooltip);

function CollectionCreateItem({ index, onReceive, onNewData, item }) {
  const classes = useStyle();
  const [formDataLink, setFormDataLink] = useState({});
  const [{ data: CollectionLink, loading, error }] =
    useAxios(`LinkCollection/5`);
  const success = !loading && !error;
  // Create
  const [
    { loading: cLoading, error: cError, response: cResponse },
    updateLink,
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
    updateLink({
      data: {
        webLinks: [
          ...CollectionLink.webLinks.slice(0, index),
          formDataLink,
          ...CollectionLink.webLinks.slice(index + 1),
        ],
      },
    }).then((res) => {
      if (res.status === 200) {
        onNewData(res.data);
        // window.location.reload();
      }
    });
  };
  const isReady = CollectionLink && success;

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleRemove = (bool) => {
    if (bool === true) {
      onReceive(index);
      updateLink({
        data: {
          webLinks: [
            ...CollectionLink.webLinks.slice(0, index),
            ...CollectionLink.webLinks.slice(index + 1),
          ],
        },
      }).then((res) => {
        if (res.status === 200) {
          onNewData(res.data);
          // window.location.reload();
        }
      });
    }
    setOpen(false);
  };
  useEffect(() => {
    if (isReady) {
      const { label, link } = item || {};
      setFormDataLink({ label, link });
    }
  }, [isReady]);
  // Color Text
  
  const handleFontColor = (field, color) =>(event)=> {
      setFormDataLink((prev) => ({
        ...prev,
        [field]: color,
      }));
      document.getElementById("fontColor").style.background = "#fff"
      event.target.style.backgroundColor = color
    };

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
            
              style={{ width: "80%"}}
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
              style={{ width: "80%" }}
              placeholder="http://"
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.input__control}>
        <div className={classes.style}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
           />
          <LightTooltip
            title="Choose the background image"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <label htmlFor="icon-button-file">
              <IconButton aria-label="upload picture" component="span">
                <CropOriginal />
              </IconButton>
            </label>
          </LightTooltip>
          <LightTooltip
            title="Choose the font color"
            placement="top"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
          >
            <ul className={classes.text_colors}>
              {["#2a7f0e", "#9e3911", "#ff0000", "#ffe500"].map(
                (color, key) => (
                  <li
                    className={classes.text_color}
                    key={key}
                    id="fontColor"
                    style={{
                      border: "3px solid",
                      borderColor: color,
                      background: "#fff",
                    }}
                    onClick={handleFontColor("color", color)}
                  />
                )
              )}
            </ul>
          </LightTooltip>
        </div>
        <Button size="small" variant="contained" onClick={handleClickOpen}>
          Remove
        </Button>

        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Are you sure remove a item?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your action will not be undone. Choose "NO" if you want to cancel.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleRemove(false)} color="primary">
              No
            </Button>
            <Button
              onClick={() => handleRemove(true)}
              color="primary"
              autoFocus
            >
              Yes
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
