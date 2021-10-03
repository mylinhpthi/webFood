import {
  Avatar,
  Paper,
  createStyles,
  Grid,
  Box,
  Tooltip,
  Fade,
  withStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  MusicNote,
  Spellcheck,
  SurroundSound,
  Twitter,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) =>
  createStyles({
    view: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
      },
    },
    root: {
        width: "250px",
        height: "500px",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        border: "8px solid #000",
        margin: "20px auto 0",
        padding: "10px 10px 0",
        borderRadius: "30px",
    },
    avatar: {
      alignItems: "center",
      margin: "5px auto 10px",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    title: {
      marginBottom: "1rem",
      fontSize:'1rem'
    },
    items_WebLink: {
      margin: "5px auto",
      textAlign: "center",
      background: "#fff",
      border: "1px solid",
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      width: "95%",
      padding: ".5rem",
      "&>a": {
        fontSize: "1rem",
        textDecoration: "none",
        fontWeight: "bold",
        width: "90%",
      },
    },
    items_SocialLink: {
      margin: "1rem auto",
      textAlign: "center",
      width: "90%",
    },
  })
);
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 12,
    boxShadow: "0px 2px 5px #000",
  },
}))(Tooltip);
function CollectionView({ data }) {
  const classes = useStyles();
  const iconArray = {
    Facebook: <Facebook style={{ color: "blue" }} />,
    Email: <MailOutline style={{ color: "red" }} />,
    Twitter: <Twitter style={{ color: "#27aae1" }} />,
    Instagram: <Instagram style={{ color: "orange" }} />,
    Youtube: <YouTube style={{ color: "red" }} />,
    Soundcloud: <SurroundSound style={{ color: "green" }} />,
    LinkedIn: <LinkedIn style={{ color: "#27aae1" }} />,
    WhatsApp: <WhatsApp style={{ color: "green" }} />,
    TikTok: <MusicNote style={{ color: "#000" }} />,
    Amazon: <Spellcheck style={{ color: "#000" }} />,
  };
  return (
    <div>
      {data && (
        <div className={classes.view}>
          <Paper
            className={classes.root}
            style={{ backgroundColor: data["bgColor"] }}
          >
            <Avatar className={classes.avatar} src={data?.avatarURL} />
            <h4
              className={classes.title}
              align="center"
            >
              {data?.title}
            </h4>
            {data.webLinks &&
              data.webLinks.map(({ link, label, index }) => {
                if (link)
                  return (
                    <a
                    href={link}   
                      key={label}
                      className={classes.items_WebLink}
                      spacing={5}
                      style={{
                        borderColor: data["borderColor"],
                        backgroundColor: data["bgColorLink"],textDecoration:'none'
                      }}
                    >
                      <div
                        className={classes.item_WebLink}
                        style={{ color: data["textColor"] }}
                      >
                        {label}
                      </div>
                    </a>
                  );
              })}
            <Grid
              container
              component={Box}
              className={classes.items_SocialLink}
              justifyContent="center"
            >
              {data.socialLinks &&
                data.socialLinks.map(({ link, type, index }) => {
                  if (link)
                    return (
                      <LightTooltip
                        title={type}
                        placement="top"
                        TransitionComponent={Fade}
                        TransitionProps={{ timeout: 10 }}
                        key={type}
                      >
                        <Grid item key={index}  style={{marginRight:'10px'}}>
                          <a href={link}>{iconArray[type]}</a>
                        </Grid>
                      </LightTooltip>
                    );
                })}
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  );
}

export default CollectionView;
