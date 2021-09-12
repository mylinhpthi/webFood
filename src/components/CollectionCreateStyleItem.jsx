import { Button, CssBaseline, Fade,  IconButton,  MenuItem, Select, Tooltip, useTheme, withStyles } from "@material-ui/core";
import { ColorLens, CropOriginal, FormatColorText } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
// const theme = createTheme({
//   palette: {
//   xxx: {
//       light: "#616161",
//       main: "#8e8e8e",
//       dark: "#373737",
//       contrastText:"#fff"
//     },
//   },
// });
const useStyle = makeStyles({
  stylePicture:{
    padding:'15px 10px 0px',
    "&>label>button":{
      border:'none',
      background:'transparent',      
    }
  },
  styleText:{
    width:'70px',
    height:'30px',
    overflow:'hidden',
    borderRadius:'3px',
    zIndex:'1',
    marginTop:'15px',
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
  };
 const [color, setColor] = useState("#000")
  return (
    <div className={classes.style}>
      <CssBaseline />
      <div className={classes.stylePicture}>
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
          <button aria-label="upload picture"  component="span">
            <CropOriginal />
          </button>
        </label>
      </LightTooltip>
      </div>
      <Select
        // variant="outlined"
        className={classes.styleText}
        value={color}
        onChange={handleChangeColor}
          MenuProps={MenuProps}
          IconComponent="false"
          displayEmpty
        >
          <MenuItem value="#000" disabled><ColorLens /></MenuItem>
          {colors.map((color, key) => (
            <MenuItem
            // className={classes.colorText}
              key={key}
              value={color}
            >
              <ColorLens style={{color:color }} />
            </MenuItem>
          ))}
        </Select> 
      </div>
  );
}

export default CollectionCreateStyleItem;
