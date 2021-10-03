import {
  Button,
  Container,
  Fade,
  Tooltip,
  withStyles,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import CollectionCreateItem from "./CollectionCreateItem";
const useStyle = makeStyles((theme) => ({
  control: {
    width: "100%",
    marginTop: "4rem",
    display: "flex",
    justifyContent: "center",
  },
  btnAdd: {
    width: "30px",
    height: "50px",
    background: "transparent",
    border: "1px solid #fff",
    textAlign: "center",
    borderRadius: "50%",
    color: "#000",
    padding: "10px ",
    margin: "5px auto",
    [theme.breakpoints.down("sm")]: {
      padding: "5px",
      margin: "5px",
    },
    "&:hover": {
      background: "#000a12",
      color: "#fff",
    },
  },
}));
const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 12,
    boxShadow: "0px 2px 5px #000",
  },
}))(Tooltip);
function CollectionCreate({ data, onNewData }) {
  const [items, setItems] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    if (data) setItems(data.webLinks);
  }, [data]);

  const handleAddItems = () => {
    if (items.length < 5) {
      setItems((prev) => [...prev, { label: "", link: "" }]);
    }
  };
  const [
    {  },
    createLink,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const handleRemoveItem = (index) => {
    createLink({
      data: {
        webLinks: [...items.slice(0, index), ...items.slice(index + 1)],
      },
    }).then((res) => {
      if (res.status === 200) {
        onNewData(res.data);
      }
    });
  };
  const handleUpdateData = (index, itemData) => {
    createLink({
      data: {
        webLinks: [
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
    <Container className={classes.container}>
      {items &&
        items.map((item, index) => (
          <CollectionCreateItem
            key={index}
            onNewData={(data) => handleUpdateData(index, data)}
            onRemove={() => handleRemoveItem(index)}
            item={item}
          />
        ))}
      <div className={classes.control}>
        <LightTooltip
          title="Add new URL"
          placement="top"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 10 }}
        >
          <Button
            size="small"
            className={classes.btnAdd}
            variant="outlined"
            onClick={handleAddItems}
          >
            <Add fontSize="large" />
          </Button>
        </LightTooltip>
      </div>
    </Container>
  );
}
export default CollectionCreate;
