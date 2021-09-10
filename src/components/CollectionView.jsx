import {
  Avatar,
  makeStyles,
  Paper,
  createStyles,
  Theme,
  Typography,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Fade,
  createTheme,
} from "@material-ui/core";
import { purple, yellow } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/styles";
import useAxios from "axios-hooks";
import React, { useState } from "react";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      border: "8px solid #fff",
      margin: "20px auto",
      width: "250px",
      height: "500px",
      padding: "10px",
      borderRadius: "30px",
      backgroundImage:
        "linear-gradient( to bottom,#ccff00,#d8f28c,#d5f7be ,#ebfce0 )",
    },
    avatar: {
      alignItems: "center",
      margin: "10px auto",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    title: {
      marginBottom: "2rem",
    },
    item__link: {
      textDecoration: "none",
      color: "black",
      fontWeight: "bold",
      width: "80%",
      letterSpacing: "1px",
    },
    item: {
      margin: "10px auto",
      textAlign: "center",
      background: "#61f450",
      width: "90%",
      position: "relative",
      textAlign: "center",
      padding: "10px",
      display: "flex",
      flexDirection: "space-around",
      "&>a": {
        fontSize: "18px",
      },
    },
  })
);

function CollectionView({ data }) {
  const classes = useStyles();
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
  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[500],
      },
      
    },
  });
  return (
    <div>
      <Paper className={classes.root}>
        <Avatar className={classes.avatar} src={data.avatarURL} />
        <Typography
          className={classes.title}
          variant="h6"
          align="center"
          gutterBottom
        >
          {data.title}
        </Typography>
        {data.webLinks &&
          data.webLinks.map(({ link, label, color, index }) => (
            <div key={index} className={classes.item} spacing={5}>
              <a className={classes.item__link} href={link} style={{color: theme.palette.primary.light}}>
                {label}
              </a>
            </div>
          ))}
      </Paper>
    </div>
  );
}

export default CollectionView;
