import {
  Button,
  CssBaseline,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@material-ui/core";
import { Person, Visibility, VisibilityOff } from "@material-ui/icons";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import background from "../images/bg.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((them) =>
  createStyles({
    root: {
      display: "flex",
      width: "80vw",
      height: "90vh",
      margin: "2rem auto",
      border: "0px groove #514242",
      background: "#fff",
      boxShadow: "5px 5px 2px #e0e0e0",
    },
    bgImage: {
      width: "50%",
      height: "80vh",
      margin:'auto',
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      [them.breakpoints.down("md")]: {
        display: "none",
      },
    },
    container: {
      width: "40%",
      margin: "auto",
      maxHeight: "90vh",
      position: "relative",
      float: "left",
      left: "1em",
      display: "flex",
      flexDirection: "column",
      [them.breakpoints.down("md")]: {
        width: "90vw",
      },
    },
    _header: {
      display: "inline-block",
      margin: 0,
      textAlign: "center",
      color: "#000",
      "&>p": {
        fontSize: "1rem",
        margin: "0 0 1rem 0",
      },
    },
    _main: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "90%",
      "&>*": {
        margin: "5px 0",
      },
    },
    _signIn: {
      display: "flex",
      margin: "auto",
    },
    _btn: {
      width: "40%",
      fontSize: "1rem",
      background: "#1faa00",
      margin: "auto",
      color: "#fff",
      "&:hover": {
        color: "#000",
        background: "#76ff03",
      },
    },
    __subtext: {
      fontSize: ".8rem",
      marginRight: "10px",
    },
    __link: {
      fontWeight: 500,
      textDecoration: "none",
      color: "#000",
    },
  })
);

function FormSignUp() {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    resetPassword: "",
    showResetPassword: false,
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
          <Typography variant="h4" gutterBottom component="div">
            Sign Up
          </Typography>
          <p>It's only takes a minute</p>
        </div>
        <div className={classes._main}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            color="secondary"
          />
          <TextField
            id="outlined-basic"
            color="secondary"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            color="secondary"
            label="Email"
            variant="outlined"
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              color="secondary"
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword")}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-resetPassword">
              Confirm password
            </InputLabel>
            <OutlinedInput
              color="secondary"
              id="outlined-adornment-resetPassword"
              type={values.showResetPassword ? "text" : "password"}
              value={values.resetPassword}
              onChange={handleChange("resetPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showResetPassword")}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showResetPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm password"
            />
          </FormControl>
        </div>
        <Button className={classes._btn}>Sign Up</Button>
        <div className={classes._signIn}>
          <p className={classes.__subtext}>You have an account?</p>
          <Link
            to="/signIn"
            className={classes.__link}
            style={{
              margin: "auto",
            }}
          >
            Sign in
          </Link>
        </div>
      </form>
      <div className={classes.bgImage}></div>
    </div>
  );
}

export default FormSignUp;
