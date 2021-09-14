import { Button, Fade, Tooltip, withStyles } from "@material-ui/core";
import { BlurLinear } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CollectionCreateItem from "./CollectionCreateItem";
const useStyle = makeStyles((theme) => ({
  control: {
    width: "100%",
    margin: "5px auto",
    display: "flex",
    justifyContent: "center",
    "&>Button": {
      padding: "10px",
      margin: "5px 10px",
      [theme.breakpoints.down("sm")]: {
        padding: "5px",
        margin: "5px",
      },
    },
  },
  btnAdd: {
    width: "70%",
    background: "#263238",
    color: "#fff",
    "&:hover": {
      background: "#000a12",
      color: "#fff",
    },
  },
  btnSocial: {
    background: "transparent",
    width: "10%",
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
    { loading: cLoading, error: cError, response: cResponse },
    createLink,
  ] = useAxios(
    {
      url: `LinkCollection/5`,
      method: "PATCH",
    },
    { manual: true }
  );
  const cSuccess = cResponse && cResponse.status === 201;
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
    <div className={classes.container}>
      <div className={classes.control}>
        <Button
          size="small"
          className={classes.btnAdd}
          variant="contained"
          onClick={handleAddItems}
        >
          ADD THE NEW LINK
        </Button>
        <LightTooltip
          title="Add social link"
          placement="top"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 10 }}
        >
          <Button className={classes.btnSocial} variant="contained">
            <Link to="/social">
              <BlurLinear style={{ color: "#000" }} />
            </Link>
          </Button>
        </LightTooltip>
      </div>
      {items &&
        items.map((item, index) => (
          <CollectionCreateItem
            key={index}
            onNewData={(data) => handleUpdateData(index, data)}
            onRemove={() => handleRemoveItem(index)}
            item={item}
          />
        ))}
    </div>
  );
}
export default CollectionCreate;
