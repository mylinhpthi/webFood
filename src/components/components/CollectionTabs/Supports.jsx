import {
  Container,
  CssBaseline,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import { Box, textAlign } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Brightness6Outlined,
  DesignServices,
  HowToVote,
  WbIridescent,
} from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import { brown, green, yellow } from "@material-ui/core/colors";
import CollectionFooter from "../CollectionFooter";
const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    margin: "70px auto",
    paddingTop:'1rem'
  },
  header: {
    display: "flex",
    width: "80%",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      flexDirection:'column'
    },
  },
  header_content: {
    display: "flex",
    flexDirection: "column",
  },
  header_title: {
    width: "60%",
    fontSize: "2rem",
    margin: "30px auto 10px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  header_subtitle: {
    width: "80%",
    fontSize: "1rem",
    margin: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: " 2rem auto",
  },
  card: {
    marginBottom: "15px",
  },
  CardContent: {
    display: " flex",
    width: "100%",
    padding: "10px",
  },
  CardTitle: {
    fontSize: "1rem",
    marginLeft: "1.5rem ",
    padding: "10px 0",
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function Supports() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(["card1"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div>
    <Box className={classes.root}>
      <CssBaseline />
      <div className={classes.header}>
        <div className={classes.header_content}>
          <p className={classes.header_title}>
            Advice and answers from the LinkHub Team
          </p>
          <p className={classes.header_subtitle}>
            By aggregating user feedback and questions, we've put them together
            and hope to help you with your current issue. If it was helpful,
            please leave feedback, thank you for this.
          </p>
        </div>
        <img
          src="/images/support.gif"
          className={classes.header_image}
          border="0"
          alt="Photobucket"
        />
      </div>
      <Container className={classes.container}>
        <Card className={classes.card} raised="true">
          <CardContent className={classes.CardContent}>
            <HowToVote sx={{ fontSize: 50 }} />
            <Typography variant="body2" className={classes.CardTitle}>
              What are the benefits of these features?
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: pink[600] }} />
            </IconButton>
            <ExpandMore
              expand={checked.indexOf("item1") !== -1}
              onClick={handleToggle("item1")}
              aria-expanded={checked.indexOf("item1") !== -1}
              aria-label="show more"
            >
              <ExpandMoreIcon color="success" />
            </ExpandMore>
          </CardActions>
          <Collapse
            in={checked.indexOf("item1") !== -1}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>
                <b>One URL for up to 5 unique URLs</b>
                <br />
                We generate a single URL tailored for up to 5 different
                exclusive URLs. We don't create two different URLs for the same
                list of provided URLs. Furthermore, if a URL sits idle without
                any clicks associated with it for more than 12 months, we'll
                delete it due to inactivity.
              </Typography>
              <Typography paragraph>
                <b>Consistency and brevity</b>
                <br />
                Open your associated URLs in different tabs at once You can open
                all the URLs associated with MergeURL at one go in your browser.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card} raised="true">
          <CardContent className={classes.CardContent}>
            <DesignServices sx={{ fontSize: 50, color: green[600] }} />
            <Typography variant="body2" className={classes.CardTitle}>
              How to create SOCIAL LINKS or WEBSITE LINKS?
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: pink[600] }} />
            </IconButton>
            <ExpandMore
              expand={checked.indexOf("item2") !== -1}
              onClick={handleToggle("item2")}
              aria-expanded={checked.indexOf("item2") !== -1}
              aria-label="show more"
            >
              <ExpandMoreIcon color="success" />
            </ExpandMore>
          </CardActions>
          <Collapse
            in={checked.indexOf("item2") !== -1}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>
                <b>Step 1: </b> You must log in to the website to save the
                combine link.
                <br />
                <b>Step 2: </b> Copy your social link and paste it in the url
                box.
                <br />
                <b>Step 3: </b> Check the validity of the link.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card} raised="true">
          <CardContent className={classes.CardContent}>
            <Brightness6Outlined sx={{ fontSize: 50, color: yellow[600] }} />
            <Typography variant="body2" className={classes.CardTitle}>
              What is the difference between SOCIAL LINKS or WEBSITE LINKS?
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: pink[600] }} />
            </IconButton>
            <ExpandMore
              expand={checked.indexOf("item3") !== -1}
              onClick={handleToggle("item3")}
              aria-expanded={checked.indexOf("item3") !== -1}
              aria-label="show more"
            >
              <ExpandMoreIcon color="success" />
            </ExpandMore>
          </CardActions>
          <Collapse
            in={checked.indexOf("item3") !== -1}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>
                <b>SOCIAL LINKS</b>
                <br />
                Social links are used for community sourcing. It is the use of
                social networks to acquire knowledge, goods or services. Some
                popular organizations like Facebook, Twitter, Zalo, .. etc.
                <br />
                <b>WEBSITE LINKS</b>
                <br />
                Website links is an HTML object that allows you to jump to a new
                location when you click or tap it. Links are found on almost
                every webpage and provide a simple means of navigating between
                pages on the web.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Card className={classes.card} raised="true">
          <CardContent className={classes.CardContent}>
            <WbIridescent sx={{ fontSize: 50, color: brown[600] }} />
            <Typography variant="body2" className={classes.CardTitle}>
              Can I edit the appearance of the generated URLs?
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.CardActions}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon sx={{ color: pink[600] }} />
            </IconButton>
            <ExpandMore
              expand={checked.indexOf("item4") !== -1}
              onClick={handleToggle("item4")}
              aria-expanded={checked.indexOf("item4") !== -1}
              aria-label="show more"
            >
              <ExpandMoreIcon color="success" />
            </ExpandMore>
          </CardActions>
          <Collapse
            in={checked.indexOf("item4") !== -1}
            timeout="auto"
            unmountOnExit
          >
            <CardContent>
              <Typography paragraph>
                By going to Appearance, you can design the look and feel of the
                URL to your hobbies, like changing colors, uploading images, ..
                and more.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Container>
    </Box>
    <CollectionFooter />
    </div>
  );
}

export default Supports;
