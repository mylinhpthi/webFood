import { CssBaseline, Fade, FormControl, FormHelperText, IconButton,  MenuItem, Select, Tooltip, useTheme, withStyles } from "@material-ui/core";
import { ColorLens, CropOriginal, FormatColorText } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyle = makeStyles({
  colors_text:{
    width:'70px',
    height:'47px',
    overflow:'hidden',
    borderRadius:'3px',
    background: "#fff",
    border:'1px solid #fff',
    zIndex:'1',
    margin:'5px',
    "&:hover": {
      color: "#fff",
      border:'4px solid #fff',
    },
  },
  color_text:{
    background: "#fff",
    "&:hover": {
      
      color: "#fff",
    },
    
  }
});
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 12,
    boxShadow: "0px 2px 5px #000",
  },
}))(Tooltip);
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
  "#000","#ff0026","#ff006e","#ff00c7","#dc00ff","#7700ff","#2200ff","#00e9ff","#00ff72","#fff","#2eff00","#ffff00","#ff9d00","#d6d5d4","#e5b2b0","#c6f268","#a2d3af","#5cce79","#5ccebf","#233a4f","#234f37","#949b44","#9b4492","#27e887","#048c48"
];
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function CollectionCreateStyleItem({onChangeColor}) {
  const classes = useStyle();
  const theme = useTheme();
  const handleChangeColor = (event)=> {
    
    setColor(event.target.value)
    onChangeColor(event.target.value);
    // event.target.style.backgroundColor = color
  };
 const [color, setColor] = useState("#000")
  return (
    <div className={classes.style}>
      <CssBaseline />
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
        TransitionProps={{ timeout: 10 }}
      >
        <label htmlFor="icon-button-file">
          <IconButton aria-label="upload picture" component="span">
            <CropOriginal />
          </IconButton>
        </label>
      </LightTooltip>
        <Select
        variant="outlined"
        className={classes.colors_text}
          value={color}
          onChange={handleChangeColor}
          MenuProps={MenuProps}
          IconComponent="false"
          displayEmpty
        >
          <MenuItem className={classes.color_text} value="#000" disabled><ColorLens /></MenuItem>
          {colors.map((color, key) => (
            <MenuItem
            className={classes.color_text}
              key={key}
              value={color}
              // onClick={handleFontColor(color)}
            >
              <ColorLens style={{color:color }} />
            </MenuItem>
          ))}
        </Select> 
    </div>
  );
}

export default CollectionCreateStyleItem;
