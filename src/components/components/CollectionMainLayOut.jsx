import * as React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SocialDistanceIcon from "@mui/icons-material/SocialDistance";
import PublicIcon from "@mui/icons-material/Public";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import useAxios from "axios-hooks";
import { Avatar } from "@material-ui/core";
import NavbarMobile from "./NavbarMobile";
const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root:{
        padding: 0,
        display: "flex",
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
    },
  infor: {
    textAlign: "center",
    display: "flex",
    padding: ".5rem",
  },
  avatar: {
    margin: "5px auto",
  },
  drawerItem: {
    textDecoration: "none",
    color: "#000",
  },
  drawerItemIcon: {
    color: "#000",
  },
  title: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "#003d33",
    fontWeight:800,
    marginLeft: "3.5rem",
  },
  content:{
    width:'100%',
    marginLeft:200
  },
  logoMain:{
      margin:'auto',
      textAlign:'center',
      display:'flex',
      justifyContent:'space-around',
      width:'70px',
  }
}));
export default function CollectionMainLayOut({children}) {
  const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const success = data && !error && !loading;
  const classes = useStyles();
  return (
    <div>
      {success && (
        <Box  className={classes.root}>
          <CssBaseline />
          <Drawer
            className={classes.drawer}
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                background: 'url("/images/navImage.jpg")',
                backgroundSize: "cover",
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <List>
            <Link to="/" className={classes.title}>
              LinkHub
            </Link>
            </List>

            <Divider style={{ background: "#000" }} />

            <List className={classes.infor}>
              <Avatar className={classes.avatar} src={data.avatarURL} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: ".8rem",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                <p>Welcome,</p>
                <b>@user123_HCM</b>
              </div>
              <div style={{width:'10%'}} />
            </List>

            <Divider style={{ background: "#000" }} />

            <List>
            <Link to="/" className={classes.drawerItem}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon className={classes.drawerItemIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/social" className={classes.drawerItem}>
                <ListItem button>
                  <ListItemIcon>
                    <SocialDistanceIcon className={classes.drawerItemIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Social Link" />
                </ListItem>
              </Link>

              <Link to="/web" className={classes.drawerItem}>
                <ListItem button>
                  <ListItemIcon>
                    <PublicIcon className={classes.drawerItemIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Website Link" />
                </ListItem>
              </Link>

              <Link to="/appearance" className={classes.drawerItem}>
                <ListItem button>
                  <ListItemIcon>
                    <DesignServicesIcon className={classes.drawerItemIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Appearance" />
                </ListItem>
              </Link>
            </List>

            <Divider style={{ background: "#000" }} />

            <List>
              <Link to="/" className={classes.drawerItem}>
                <ListItem button>
                  <ListItemIcon>
                    <LogoutIcon className={classes.drawerItemIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Log out" />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <NavbarMobile />
          <main className={classes.content}>
                <img className={classes.logoMain} src="/logo.png" ></img>
                {children}
          </main>
        </Box>
      )}
      
    </div>
  );
}
