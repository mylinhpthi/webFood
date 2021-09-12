import {
  Avatar,
  makeStyles,
  Paper,
  createStyles,
  Typography,
  CardMedia,
} from "@material-ui/core";
import logo from "./images/LinkHub.PNG";
import React from "react";
// const theme = createTheme({
//   palette: {
//     primary:{
//       light: "#fff",
//       main: "#fff",
//       dark: "#fff",
//     },
//     secondary: {
//       light: "#616161",
//       main: "#8e8e8e",
//       dark: "#373737",
//     },
//   },
// });
const useStyles = makeStyles((theme) =>
  createStyles({
    view:{
      display:'flex',
      flexDirection:'column',
    },
    linkhub:{
      textAlign:'center',
      padding:'10px',
      width:'90%',
      margin:'auto',
      fontSize:18,
      background:'#fff',
      boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",  
    },
    root: {
      display:'none',
      [theme.breakpoints.up("sm")]:{
      display: "flex",
      position:'relative',
      flexDirection: "column",
      border: "8px solid #000",
      margin: "20px auto 0",
      width: "250px",
      height:'500px',
      padding: "10px 10px 0",
      borderRadius: "30px",
      backgroundImage:
        "linear-gradient( to bottom,#fff,#fff9c4,#ffff5a,#ffff00 )",
    }},
    avatar: {
      alignItems: "center",
      margin: "10px auto",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    title: {
      marginBottom: "1.5rem",
    },
    item: {
      margin: "5px auto",
      textAlign: "center",
      background: "#fff",
      boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      width: "90%",
      padding: "10px",
      "&>a": {
        fontSize: "16px",
        textDecoration: "none",
      fontWeight: "bold",
      width: "80%",
      },
    },
  })
);

function CollectionView({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.view}>
      <div className={classes.linkhub}>
       <b>LinkHub: </b>
       <u>https://linkhub/davidTruong</u>
      </div>
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
