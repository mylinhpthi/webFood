import {
  CssBaseline,
  MenuItem,
  Select
} from "@material-ui/core";
import { ColorLens } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
const useStyle = makeStyles((theme) => ({
  styleText: {
    height: "auto",
    overflow: "hidden",
    borderRadius: "3px",
    zIndex: "1",
    padding: ".2rem",
  },
  btn: {
    fontSize: "1.8rem",
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
}));
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 60,
    },
  },
};
const colors = [
  "#000",
  "#ff0026",
  "#ff006e",
  "#ff00c7",
  "#dc00ff",
  "#7700ff",
  "#2200ff",
  "#00e9ff",
  "#00ff72",
  "#fff",
  "#2eff00",
  "#ffff00",
  "#ff9d00",
  "#d6d5d4",
  "#e5b2b0",
  "#c6f268",
  "#a2d3af",
  "#5cce79",
  "#5ccebf",
  "#233a4f",
  "#234f37",
  "#949b44",
  "#9b4492",
  "#27e887",
  "#048c48",
];
function CollectionCreateStyleItem({ onChangeColor }) {
  const classes = useStyle();
  const handleChangeColor = (event) => {
    setColor(event.target.value);
    onChangeColor(event.target.value);
  };
  const [color, setColor] = useState("#000");
  return (
    <div className={classes.style}>
      <CssBaseline />
      <Select
        className={classes.styleText}
        value={color}
        onChange={handleChangeColor}
        MenuProps={MenuProps}
        IconComponent="false"
        displayEmpty
      >
        <MenuItem value="#000" disabled>
          <ColorLens />
        </MenuItem>
        {colors.map((color, key) => (
          <MenuItem key={key} value={color}>
            <ColorLens style={{ color: color }} className={classes.btn} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default CollectionCreateStyleItem;
