import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CssBaseline, Grid } from "@material-ui/core";
import {
  Call,
  Facebook,
  Instagram,
  LinkedIn,
  Mail,
  Public,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#e0f2f1",
    padding: "10px",
  },
  first_footer: {
    margin: "1rem auto",
  },
  fFT_items: {
    display: "flex",
    width: "40%",
    margin: "auto",
    justifyContent: "space-around",
    listStyle: "none",
    color: "#000",
  },
  fFT_item: {
    borderRight: "1px solid #000",
    padding: "5px 2.5rem",
    "&:last-child": {
      border: "none",
    },
    "&>a": {
      color: "#000",
      textDecoration: "none",
    },
    "&>*:hover": {
      fontWeight:800,
    },
  },
  second_footer: {
    borderTop: "2px solid #000",
    width: "90%",
    paddingTop: "20px",
    margin: "auto",
  },
  SFT_logo: {
    display: "flex",
    justifyContent: "center",
  },
  SFT_infor: {
    display: "flex",
    flexDirection: "column",
  },
  SFT_item: {
    color: "#000",
    display: "flex",
    justifyContent: "center",
    padding: "2px",
  },
  SFT_social: {
    color: "#000",
    textAlign: "center",
    fontSize: "1.2rem",
  },
  SFT_socialIcons: {
    display: "flex",
    justifyContent: "center",
    "&>*": {
      border: "1px solid #000",
      padding: "7px",
      width: "40px",
      height: "40px",
      margin: "5px",
      fontSize: "1.5rem",
      color: "#000",
    },
    "&>*:hover": {
      background: "#80cbc4",
      paddingTop:'5px'
    },
  },
  SFT_icon: {
    margin: "auto 5px 0 0",
    padding: "2px",
  },
}));
function CollectionFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.first_footer}>
        <ul className={classes.fFT_items}>
          <li className={classes.fFT_item}>
            <Link to="/support" target="_top">Support</Link>
          </li>
          <li className={classes.fFT_item}>
            <Link to="/" target="_top">Pricing</Link>
          </li>
          <li className={classes.fFT_item}>
            <Link to="">Contact</Link>
          </li>
          <li className={classes.fFT_item}>
          <a href="https://linktr.ee/" target="_blank" >More </a>
          </li>
        </ul>
      </Container>
      <Grid
        container
        alignItems="center"
        columns={{ xs: 12, md: 4 }}
        className={classes.second_footer}
      >
        <Grid item xs={12} md={4} className={classes.SFT_logo}>
          <img src="/logo.PNG" alt="" style={{ width: "15rem" }} />
        </Grid>
        <Grid item xs={12} md={4} className={classes.SFT_infor}>
          <p className={classes.SFT_item}>
            An Khanh Ward, Ninh Kieu District, Can Tho
          </p>
          <p className={classes.SFT_item}>
            <Mail className={classes.SFT_icon} />
            support@besoft.vn
          </p>
          <p className={classes.SFT_item}>
            <Public className={classes.SFT_icon} /> http://besoft.vn/
          </p>
          <p className={classes.SFT_item}>
            <Call className={classes.SFT_icon} /> (034) 499 0988
          </p>
        </Grid>
        <Grid item xs={12} md={4} className={classes.SFT_social}>
          <p>Follow Us</p>
          <nav className={classes.SFT_socialIcons}>
            <a href="https://www.facebook.com/besoftvn/" target="_blank">
              <Facebook />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <Instagram />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <Twitter />
            </a>
            <a href="https://www.google.com/" target="_blank">
              <LinkedIn />
            </a>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
}

export default CollectionFooter;
