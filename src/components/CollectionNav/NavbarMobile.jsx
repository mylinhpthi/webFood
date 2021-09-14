import React from "react";
import {makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import MailIcon from "@material-ui/icons/Mail";
import {
  Avatar, CssBaseline,
} from "@material-ui/core";
import {
  Apps,
  ExitToApp,
  Person,
} from "@material-ui/icons";
import useAxios from "axios-hooks";
const useStyles = makeStyles((theme) => ({
    sectionMobile: {
      padding:0,
        display: "flex",
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
  menuItem: {
    color: "#000",
    display:'flex',
    justifyContent:'space-around',
    "&:hover": {
      color: "#000",
      backgroundColor: "#8e8e8e",
    },
  },
  profile: {
    textAlign: "center",
    padding: "10px",
  },
  avatar: {
    margin: "5px auto",
  },
}));
function NavbarMobile() {
    const [{ data, loading, error }] = useAxios("LinkCollection/5");
  const success = data && !error && !loading;
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
      const mobileMenuId = "primary-search-account-menu-mobile";
      
  return (
      <div >
          {success&&(
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
            </div>
          
          )}
      </div>
    );
}

export default NavbarMobile;
