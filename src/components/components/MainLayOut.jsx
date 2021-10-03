import { Button, CssBaseline } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import CollectionFooter from "./CollectionFooter";
const useStyles = makeStyles((theme) => ({
  Component: {
    maxWidth: "80vw",
    margin: "2rem auto",
    display: "flex",
    justifyContent: "space-between",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      "&:nth-child(2)": {
        flexDirection: "column-reverse",
      },
      flexDirection: "column",
      height: "auto",
    },
  },
  image: {
    width: "50%",
    maxHeight: "70vh",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  content: {
    width: "35%",
    maxHeight: "70vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "auto",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  header: {
    fontSize: "3rem",
    marginBottom: "10px",
    color:'#004d40',
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
  },
  subContent: {
    fontSize: "1.2rem",
    lineHeight: 1.5,
    color:'#00251a',
    marginBottom: "1.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  Component_btn: {
    border: "1px solid #00796b",
    textDecoration: "none",
    background: "#00796b",
    "&>*": {
      color: "#fff",
    },
    "&:hover": {
      background: "#004c40",
    },
  },
}));
function MainLayOut() {
  const classes = useStyles();
  return (
    <div>
      <Box style={{ margin: "10% auto" }}>
        <CssBaseline />
        <div className={classes.Component}>
          <div className={classes.image}>
            <img
              src="/images/main.svg"
              style={{
                width: "80%",
                display: "flex",
                margin: "auto",
              }}
              alt=""
            />
          </div>
          <div className={classes.content}>
            <p className={classes.header}>
              One Link
              <br />
              Multiple URLs
            </p>
            <p className={classes.subContent}>
              Are you sick of posting multiple URLs? Here, you can create a
              tailored MergeURL hassle-free with a short time.
            </p>
            <Link
              to="/signUp"
              target="_top"
              className={classes.Component_btn}
              endIcon={<ArrowForward />}
            >
              <Button className={classes.btn_Start} endIcon={<ArrowForward />}>
                Sign Up For Free
              </Button>
            </Link>
          </div>
        </div>
        <div className={classes.Component} id="Blog">
          <div className={classes.content}>
            <p className={classes.header}>SOCIAL LINKS</p>
            <p className={classes.subContent}>
              In a short time, you can create a miniature world with popular
              social networks and integrate many design functions according to
              your requirements.
            </p>
            <Link
              to="/social"
              target="_top"
              className={classes.Component_btn}
              endIcon={<ArrowForward />}
            >
              <Button className={classes.btn_Start} endIcon={<ArrowForward />}>
                GET STARTED
              </Button>
            </Link>
          </div>
          <div className={classes.image}>
            <img src="/images/social.svg" alt="" />
          </div>
        </div>
        <div className={classes.Component}>
          <div className={classes.image}>
            <img src="/images/web.svg" alt="" />
          </div>
          <div className={classes.content}>
            <p className={classes.header}>WEBSITE LINKS</p>
            <p className={classes.subContent}>
              Tired of memorizing lengthy web pages? Having trouble reopening
              frequently visited websites? Let us help you with that by
              aggregating it all in one interface.
            </p>
            <Link
              to="/web"
              className={classes.Component_btn}
              endIcon={<ArrowForward />}
              target="_top"
            >
              <Button className={classes.btn_Start} endIcon={<ArrowForward />}>
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </Box>
      <CollectionFooter />
    </div>
  );
}

export default MainLayOut;
