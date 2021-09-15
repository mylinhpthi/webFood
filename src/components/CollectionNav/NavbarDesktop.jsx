import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Drawer,
  Avatar,
} from "@material-ui/core";
import {
  Apps,
  ContactSupport,
  ExitToApp,
  NavigateNext,
  Person,
} from "@material-ui/icons";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    position: "absolute",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    color: "#fff",
    backgroundColor: "#8e8e8e",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  menuItem: {
    color: "#fff",
    backgroundColor: "#8e8e8e",
    "&:hover": {
      color: "#000",
    },
  },
  profile: {
    textAlign: "center",
    padding: "5px",
  },
  avatar: {
    margin: "5px auto",
  },
}));
export default function NavbarDesktop() {
  const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const success = data && !error && !loading;
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <div>
      {success && (
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(openDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openDrawer}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                <NavigateNext style={{ color: "#fff" }} />
              </IconButton>
              <div className={classes.profile}>
                <Avatar className={classes.avatar} src={data.avatarURL} />
                <b>@DavidTruong123</b>
              </div>
            </div>
            <Divider />
            <List>
              <Link
                to="/user"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <ListItem button>
                  <ListItemIcon>
                    <Person style={{ color: "#fff" }} />
                  </ListItemIcon>
                  <ListItemText primary="MY ACCOUNT" />
                </ListItem>
              </Link>
              <ListItem button>
                <ListItemIcon>
                  <Apps style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="FEATURES" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ContactSupport style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="SUPPORT" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ExitToApp style={{ color: "#fff" }} />
                </ListItemIcon>
                <ListItemText primary="LOG OUT" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      )}
    </div>
  );
}
