import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import CollectionCreateItem from "./CollectionCreateItem";
import { SocialDistance } from "@mui/icons-material";
const useStyle = makeStyles((them) => ({
  header: {
    width: "80%",
    margin: "1.5rem auto 0",
    display: "flex",
    justifyContent: "space-between",
    "&>div": {
      padding: "10px",
      display: "flex",
    },
  },
  content: {
    width: "80%",
    justifyContent: "flex-start",
    "&>*": {
      marginRight: ".5rem",
      fontSize: "1.5rem",
      fontWeight: "bolder",
    },
  },
  contentIcon: {
    fontSize: "2rem",
    [them.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  contentText: {
    fontSize: "1.5rem",
    color:'#00897b',
    [them.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));
function CollectionCreate({ data, onNewData }) {
  const [items, setItems] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    if (data) setItems(data.socialLinks);
  }, [data]);
  const [
    { loading: cLoading, error: cError, response: cResponse },
    createLink,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const handleUpdateData = (index, itemData) => {
    createLink({
      data: {
        socialLinks: [
          ...items.slice(0, index),
          itemData,
          ...items.slice(index + 1),
        ],
      },
    }).then((res) => {
      if (res.status === 200) {
        onNewData(res.data);
      }
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.content}>
          <SocialDistance fontSize="large" color="success" className={classes.contentIcon} />
          <Typography className={classes.contentText}>SOCIAL LINKS</Typography>
        </div>
      </div>
      {items &&
        items.map((item, index) => (
          <CollectionCreateItem
            key={index}
            onNewData={(data) => handleUpdateData(index, data)}
            item={item}
          />
        ))}
    </div>
  );
}
export default CollectionCreate;
