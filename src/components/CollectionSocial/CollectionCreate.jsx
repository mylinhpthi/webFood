import {
  Box,
  Fade,
  Tooltip,
  Typography,
  withStyles,
} from "@material-ui/core";
import { BlurLinear, Favorite } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollectionCreateItem from "./CollectionCreateItem";
const useStyle = makeStyles((them) => ({
  header: {
    width: "90%",
    margin: "5px auto",
    display: "flex",
    justifyContent: "space-between",
    "&>div": {
      padding: "10px",
      display: "flex",
    },
  },
  content: {
    width: "80%",
    justifyContent: "flex-start",
    "&>*": {
      marginRight: ".5rem",
      fontSize: "1.5rem",
      fontWeight: "bolder",
    },
  },
  contentIcon:{
      fontSize:'2rem',
      [them.breakpoints.down("sm")]: {
        fontSize:'1.5rem',
      },
  },
  contentText:{
    fontSize:'2rem',
    [them.breakpoints.down("sm")]: {
      fontSize:'1rem',
    },
  },
  btnSocialLink: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
   "&>:hover": {
      background: "#000",
      color: "#fff",
      padding:' 0 10px'
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
function CollectionCreate({ data, onNewData }) {
  const [items, setItems] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    if (data) setItems(data.socialLinks);
  }, [data]);
  const [
    createLink,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const handleUpdateData = (index, itemData) => {
    createLink({
      data: {
        socialLinks: [
          ...items.slice(0, index),
          itemData,
          ...items.slice(index + 1),
        ],
      },
    }).then((res) => {
      if (res.status === 200) {
        onNewData(res.data);
      }
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.content}>
          <Favorite color="secondary" className={classes.contentIcon} />
          <Typography className={classes.contentText} >SOCIAL LINKS</Typography>
        </div>
        <LightTooltip
          title="Jump to web links"
          placement="top"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 10 }}
        >
          <Box className={classes.btnSocialLink}>
           <Link to="/web">
           <BlurLinear className={classes.contentIcon} />
           </Link></Box>
        </LightTooltip>
      </div>
      {items &&
        items.map((item, index) => (
          <CollectionCreateItem
            key={index}
            onNewData={(data) => handleUpdateData(index, data)}
            item={item}
          />
        ))}
    </div>
  );
}
export default CollectionCreate;
