import React from "react";
import logo from "./images/LinkHub.PNG";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import clsx from "clsx";
import {
  CardMedia,
  createTheme,
  ThemeProvider,
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
const theme = createTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
    },
    secondary: {
      light: "#616161",
      main: "#8e8e8e",
      dark: "#373737",
    },
  },
});
const drawerWidth = 220;
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navbar__logo: {
    width: "30%",
    marginRight: theme.spacing(2),
    display: "block",
    height: "30px",
    [theme.breakpoints.up("sm")]: {
      width: "20%",
      padding: "5px",
      height: "50px",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
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
export default function CollectionNav() {
  const [{ data }] = useAxios("LinkCollection/5");
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div className={classes.profile}>
        <Avatar className={classes.avatar} src={data.avatarURL} />
        <b>@DavidTruong123</b>
      </div>
      <MenuItem className={classes.menuItem}>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton color="inherit">
          <Person />
        </IconButton>
        <p>MY ACCOUNT</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton color="inherit">
          <Apps />
        </IconButton>
        <p>FEATURES</p>
      </MenuItem>
      <MenuItem className={classes.menuItem}>
        <IconButton color="inherit">
          <ExitToApp />
        </IconButton>
        <p>LOG OUT</p>
      </MenuItem>
    </Menu>
  );
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.grow}>
        <AppBar color="secondary" position="static">
          <Toolbar>
            <CardMedia className={classes.navbar__logo} image={logo} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
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
                  <ListItem button>
                    <ListItemIcon>
                      <Person style={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary="MY ACCOUNT" />
                  </ListItem>
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
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </ThemeProvider>
  );
}
