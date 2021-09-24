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
      margin: "1rem auto",
      background: "#fff",
      boxShadow: "5px 5px 2px #e0e0e0",
      [them.breakpoints.down("md")]: {
        boxShadow: "0px 5px 2px #e0e0e0",
      },
    },
    bgImage: {
      width: "50%",
      height: "80vh",
      margin: "auto",
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
      height: "100%",
      display: "flex",
      flexDirection: "column",
      [them.breakpoints.down("md")]: {
        width: "90%",
      },
    },
    _header: {
      display: "inline-block",
      margin: 0,
      textAlign: "center",
      color: "#000",
    },
    __subTitle: {
      fontSize: "1rem",
      margin: "0 0 1rem 0",
      [them.breakpoints.down("md")]: {
        margin: "0 0 .5rem 0",
      },
      opacity: 0.8,
    },
    __title: {
      fontSize: "2rem",
      fontWeight: 800,
      margin: "10px 0 0 0",
      [them.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
    },
    _main: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "90%",
      "&>*": {
        width: "90%",
        margin: ".5rem auto",
        [them.breakpoints.down("md")]: {
          width: "70%",
        },
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
      margin: "10px auto 0",
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
          <p className={classes.__title}>Sign Up</p>
          <p className={classes.__subTitle}>It's only takes a minute</p>
        </div>
        <div className={classes._main}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <TextField
            id="outlined-basic"
            color="secondary"
            label="Last Name"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            color="secondary"
            label="Email"
            variant="outlined"
            size="small"
          />
          <TextField
            label="Password"
            id="outlined-end-adornment"
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
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            color="secondary"
          />
          <TextField
            label="Confirm password"
            id="outlined-end-adornment"
            type={values.showResetPassword ? "text" : "password"}
            value={values.resetPassword}
            onChange={handleChange("resetPassword")}
            InputProps={{
              endAdornment: (
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
              ),
            }}
            variant="outlined"
            size="small"
            color="secondary"
          />
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
