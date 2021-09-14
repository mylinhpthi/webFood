import { Button, Container, CssBaseline } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  content: {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  txt_content: {
    display: "inline-block",
    fontSize: "3rem",
    textAlign: "center",
    margin: "0 auto 3rem",
    [theme.breakpoints.down('sm')]: {
      fontSize: "2rem",
    },
  },
  btn: {
    border: "1px solid #000",
    color: "#000",
    textDecoration: "none",
  },
  btn_Start: {
    color: "#000",
  },
}));
function CollectionMenu() {
  const classes = useStyles();
  return (
    <Container>
      <CssBaseline />
      <div className={classes.content}>
        <div className={classes.txt_content}>
          One Link
          <br />
          <b>Multiple URLs</b>
        </div>
        <Link to="/web" className={classes.btn} endIcon={<ArrowForward />}>
          <Button className={classes.btn_Start} endIcon={<ArrowForward />}>
            GET STARTED
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default CollectionMenu;
