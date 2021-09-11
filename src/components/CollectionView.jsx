import {
  Avatar,
  makeStyles,
  Paper,
  createStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
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
              <a className={classes.item__link} href={link} style={{color:color}}>
                {label}
              </a>
            </div>
          ))}
      </Paper>
    </div>
  );
}

export default CollectionView;
