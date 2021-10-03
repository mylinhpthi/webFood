import {
  Button,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import {
  ArrowForward,
  Person,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((them) =>
  createStyles({
    root: {
      width:'720px',
      height:'512px',
      display: "flex",
      position:'relative',
      margin: "1rem auto",
      // boxShadow: "5px 5px 2px #e0e0e0",
      // [them.breakpoints.down("md")]: {
      //   boxShadow: "0px 5px 2px #e0e0e0",
      // },
    },
    bgImage: {
      width:'720px',
      height:'512px',
      margin: "auto",
      // [them.breakpoints.down("md")]: {
      //   display: "none",
      // },
    },
    container: {
      position:'absolute',
      width:'350px',
      margin: "0 2.5rem",
      height:'450px',
      display: "flex",
      alignItems:'center',
      flexDirection: "column",
      [them.breakpoints.down("md")]: {
        width: "90%",
      },
      
    },
    _header: {
      display: "inline-block",
      marginTop: '3rem',
      textAlign: "center",
      color: "#000",
    },
    __subTitle: {
      fontSize: "1rem",
      // [them.breakpoints.down("md")]: {
      //   margin: "0 0 .5rem 0",
      // },
      opacity: 0.8,
    },
    __title: {
      fontSize: "1.5rem",
      fontWeight: 800,
      marginTop: "10px",
      // [them.breakpoints.down("md")]: {
      //   fontSize: "1.5rem",
      // },
    },
    _main: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "90%",
      "&>*": {
        width: "90%",
        margin: "5px auto",
        [them.breakpoints.down("md")]: {
          width: "70%",
        },
      },
    },
    _signIn: {
      display: "flex",
      margin: "auto",
      color: "#000",
      
    },
    _btn: {
      width: "30%",
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
      fontSize: "1rem",
      marginRight: "10px",
    },
    __link: {
      fontSize: "1rem",
      fontWeight: 800,
      textDecoration: "none",
      color: "#000",
    },
  })
);

function FormSignUp({ onClose }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
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
  const handleClick = () => {
    onClose();
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
              InputLabelProps={{ style: { fontSize: ".8rem" } }}
            />
            <TextField
              color="primary"
              label="Email"
              variant="standard"
              size="small"
              inputProps={{ style: { fontSize: ".9rem" } }}
              InputLabelProps={{ style: { fontSize: ".8rem" } }}
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
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { fontSize: ".8rem" } }}
              variant="standard"
              size="small"
              color="primary"
            />
            <TextField
              label="Confirm password"
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        handleClickShowPassword("showConfirmPassword")
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { fontSize: ".8rem" } }}
              variant="standard"
              size="small"
              color="primary"
            />
          </div>
          <Button
            className={classes._btn}
            endIcon={<ArrowForward />}
            onClick={handleClick}
          >
            Sign up
          </Button>
          <div className={classes._signIn}>
            <p className={classes.__subtext}>Allready you have an account? </p>
            <Link to="/signIn" className={classes.__link}>
              Log in
            </Link>
          </div>
        </form>
        <img src="/images/signUp.png" bgImage alt="" />
      </div>

  );
}

export default FormSignUp;
