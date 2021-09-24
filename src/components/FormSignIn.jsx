import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import background from "../images/bgImg.png";
import { Link } from "react-router-dom";
import { Person, Visibility, VisibilityOff } from "@material-ui/icons";
const useStyles = makeStyles((them) =>
  createStyles({
    root: {
      display: "flex",
      width: "70vw",
      height: "90vh",
      margin: "2rem auto",
      border: "0px groove #514242",
      background: "#fff",
      boxShadow: "5px 5px 2px #e0e0e0",
    },
    bgImage: {
      width: "50%",
      height: "80vh",
      margin: "auto 0",
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
      maxHeight: "500px",
      position: "relative",
      float: "right",
      right: "1em",
      display: "flex",
      flexDirection: "column",
      [them.breakpoints.down("md")]: {
        width: "90vw",
      },
    },
    _header: {
      display: "inline-block",
      textAlign: "center",
      fontSize: "2rem",
      color: "#000",
      fontWeight: 500,
    },
    _main: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
      width: "90%",
    },
    _sub: {
      display: "flex",
      justifyContent: "space-between",
      margin: "10px auto",
      width: "90%",
    },
    _signUp: {
      display: "flex",
      margin: "auto",
    },
    __subtext: {
      fontSize: ".8rem",
      marginRight: "5px",
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
    __link: {
      fontWeight: 500,
      textDecoration: "none",
      color: "#000",
    },
  })
);
function FormSignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}></div>
      <form className={classes.container}>
        <div className={classes._header}>
          <p>Member Login</p>
        </div>
        <div className={classes._main}>
          <FormControl
            style={{ margin: "1rem 0 " }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-username">
              UserName
            </InputLabel>
            <OutlinedInput
              color="secondary"
              id="outlined-adornment-username"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <Person />
                </InputAdornment>
              }
              label="Username"
            />
          </FormControl>
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
                    onClick={handleClickShowPassword}
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
        </div>

        <div className={classes._sub}>
          <div className={classes.__subtext}>
            <input type="checkbox" style={{ color: "green" }} />
            <label for="radio1">Remember me</label>
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
    </div>
  );
}

export default FormSignIn;
