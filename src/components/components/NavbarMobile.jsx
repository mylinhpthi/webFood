import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Avatar, Divider } from "@material-ui/core";
import {
  ContactSupport,
  InfoOutlined,
  Language,
  MenuOutlined,
} from "@material-ui/icons";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import { SocialDistance } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  sectionMobile: {
    padding: '30px 0 0',
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },header:{
    display:'flex',
    justifyContent: "space-between",
    width:'60%',
    marginLeft:'38%'
  },
  title: {
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "#003d33",
    fontWeight:800,
    marginRight: "10px",
  },
  menuItem: {
    color: "#000",
    display: "flex",
    justifyContent: "space-around",
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
  link: {
    textDecoration: "none",
    color: "#000",
    display: "flex",
    fontSize: "2rem",
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
    <div>
      {success && (
        <div className={classes.sectionMobile}>
          <div className={classes.header}>
            <Link to="/" className={classes.title}>
              LinkHub
            </Link>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuOutlined />
            </IconButton>
          </div>

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
              <b>@user123_HCM</b>
            </div>
            <Divider />
            <Link to="/social" target="_top" className={classes.link}>
              <MenuItem className={classes.menuItem}>
                <IconButton color="inherit">
                  <SocialDistance />
                </IconButton>
                <p>SOCIAL LINKS</p>
              </MenuItem>
            </Link>
            <Link to="/web" target="_top" className={classes.link}>
              <MenuItem className={classes.menuItem}>
                <IconButton color="inherit">
                  <Language />
                </IconButton>
                <p>WEBSITE LINKS</p>
              </MenuItem>
            </Link>
            <Link to="/user" target="_top" className={classes.link}>
              <MenuItem className={classes.menuItem}>
                <IconButton color="inherit">
                  <InfoOutlined />
                </IconButton>
                <p>APPEARANCE</p>
              </MenuItem>
            </Link>
            <Link to="/support" target="_top" className={classes.link}>
              <MenuItem className={classes.menuItem}>
                <IconButton color="inherit">
                  <ContactSupport />
                </IconButton>
                <p>SUPPORT</p>
              </MenuItem>
            </Link>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
