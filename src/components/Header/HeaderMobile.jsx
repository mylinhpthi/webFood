import {
  Box,
  Button,
  createTheme,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  ThemeProvider,
  Typography,
  Avatar,
  ListSubheader,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  PersonOutline,
  SearchOutlined,
  ShoppingCartOutlined,
  InboxOutlined,
  MailOutline,
  MenuOpen,
  ExitToAppOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "../Css/dist/Header.css";
import { Link } from "react-router-dom";
const theme = createTheme({
  palette: {
    secondary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  profile:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#4d8a54',
    paddingBottom:'10px',
  },
  avatar:{
    margin:'5px auto',
    width:'50px',
    height:'50px',
    padding:'5px',
    border:'2px solid #fff'
  },
  content:{
    color:'#fff',
    width:'100%',
    margin:'5px auto',
    textAlign:'center',  
  },
  userName:{
    fontSize:'1rem',
    fontWeight:800,
  },
  sub_userName:{
    fontSize:'.8rem'
  },
  sign:{
    "&>a":{
      display:'flex',
      color:'#000',
      margin:'10px 0',
      
    }
  }
}));
function HeaderMobile() {
  const classes = useStyles();
  const [toggle, setToggle] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggle(open);
  };
  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box className={classes.profile}>
        <Avatar className={classes.avatar} alt="Remy Sharp" src="/images/avatar.png" />
        <div className={classes.content}>
          <p className={classes.userName}>Javen William</p>
          <p className={classes.sub_userName}>
            <i>@user123</i>
          </p>
        </div>
      </Box>
      <nav className={classes.sign}>
        <Link to ="#">
          <ExitToAppOutlined style={{marginRight:'10px'}}/>
          <p>Đăng nhập</p>
        </Link>
        <Link to ="#">
          <PersonOutline style={{marginRight:'10px'}} />
          <p>Đăng ký</p>
        </Link>
      </nav>
      <Divider />
      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          Danh mục  
        </ListSubheader>
        <ListItem button component="a" href="#top">
          <ListItemText primary="Trang chủ" />
        </ListItem>
        <ListItem button component="a" href="#">
          <ListItemText primary="Giới thiệu" />
        </ListItem>
        <ListItem button component="a" href="#">
          <ListItemText primary="Sản phẩm" />
        </ListItem>
        <ListItem button component="a" href="#">
          <ListItemText primary="Thực đơn" />
        </ListItem>
        <ListItem button component="a" href="#">
          <ListItemText primary="Tin tức" />
        </ListItem>
        <ListItem button component="a" href="#">
          <ListItemText primary="Liên hệ" />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box className="mobile">
      <CssBaseline />
      <div className="mainHeader">
        <div className="leftHeader">
          <MenuOpen className="icon" onClick={toggleDrawer(true)} />
          <Drawer open={toggle} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </div>
        <img src="/images/logo_mobile.png" alt="Logo" className="logo" />
        <div className="rightHeader">
          <div className="item_header">
            <Link to="" className="content">
              <SearchOutlined className="icon" />
            </Link>
          </div>
          <div className="item_header">
            <Link to="" className="content">
              <ShoppingCartOutlined className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default HeaderMobile;
