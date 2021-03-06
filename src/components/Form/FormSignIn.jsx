import {
  Button,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { ArrowForward, Visibility, VisibilityOff } from "@material-ui/icons";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((them) =>
  createStyles({
    root: {
      width: "720px",
      height: "512px",
      display: "flex",
      position: "relative",
      margin: "80px auto 0",
      boxShadow: "5px 5px 2px #e0e0e0",
      [them.breakpoints.down("md")]: {
        boxShadow: "0px 5px 2px #e0e0e0",
        width: "70%",
        background:
          "linear-gradient(180deg,#cccab5 0%,  rgba(231,249,229,1) 57%, rgba(255,255,255,1) 100%)",
      },
    },
    bgImage: {
      width: "720px",
      height: "512px",
      margin: "auto",
      [them.breakpoints.down("md")]: {
        display: "none",
      },
    },
    container: {
      position: "absolute",
      width: "350px",
      margin: "0 2.5rem",
      height: "450px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      [them.breakpoints.down("md")]: {
        width: "90%",
        margin: "0 10px",
      },
    },
    _header: {
      display: "inline-block",
      marginTop: "3rem",
      textAlign: "center",
      color: "#000",
    },
    __subTitle: {
      fontSize: "1rem",
      opacity: 0.8,
    },
    __title: {
      fontSize: "1.5rem",
      fontWeight: 800,
      margin: "10px auto",
    },
    _main: {
      display: "flex",
      flexDirection: "column",
      margin: "10px auto",
      width: "90%",

      "&>*": {
        width: "90%",
        margin: "5px auto",
        [them.breakpoints.down("md")]: {
          width: "80%",
        },
      },
    },
    _signIn: {
      display: "flex",
      margin: "auto",
      color: "#000",
    },
    _btn: {
      width: "40%",
      fontSize: "1rem",
      background: "#64d8cb",
      margin: "20px auto 0",
      color: "#000",
      "&:hover": {
        color: "#fff",
        background: "#00766c",
      },
    },
    __subtext: {
      fontSize: ".9rem",
      marginRight: "10px",
      opacity: 0.8,
    },
    __link: {
      fontSize: ".9rem",
      fontWeight: 800,
      textDecoration: "none",
      color: "#000",
    },
  })
);

function FormSignIn() {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => {
    setValues({
      ...values,
      [prop]: !values[prop],
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <form className={classes.container}>
        <div className={classes._header}>
          <h1 className={classes.__title}>SIGN UP</h1>
          <p className={classes.__subTitle}>
            Please fill in this form to create account
          </p>
        </div>
        <div className={classes._main}>
          <TextField
            label="Username"
            variant="standard"
            color="primary"
            size="small"
            inputProps={{ style: { fontSize: ".9rem" } }}
            InputLabelProps={{ style: { fontSize: ".9rem" } }}
          />
          <TextField
            label="Password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword")}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? (
                      <VisibilityOff color="primary" />
                    ) : (
                      <Visibility color="primary" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ style: { fontSize: ".9rem" } }}
            variant="standard"
            size="small"
            color="primary"
          />
        </div>
        <div className={classes._sub}>
          <div className={classes.__subtext}>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" style={{ marginLeft: "5px" }}>
              Remember me
            </label>
          </div>
          <Link className={classes.__link}>Forgot password?</Link>
        </div>
        <Button className={classes._btn}>Sign In</Button>
        <div className={classes._signUp}>
          <p className={classes.__subtext}>Don't have an account?</p>
          <Link
            to="/signUp"
            className={classes.__link}
            style={{
              margin: "auto",
            }}
          >
            Create Account
          </Link>
        </div>
      </form>
      <img src="/images/signUp.png" className={classes.bgImage} alt="" />
    </div>
  );
}

export default FormSignIn;
