import { Button } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import useAxios from "axios-hooks";
import React, { useEffect, useState } from "react";
import CollectionCreateItem from "./CollectionCreateItem";
const useStyle = makeStyles({
  control:{
    width: "50%",
    margin: '30px auto',
    "&>Button": {
      padding:'10px',
      border: "1px solid #fff",
      color: "#000",
      width:'100%',
      marginBottom: "5px",
      background: "#fff",
      margin: "5px",
      "&:hover": {
        background: "#000",
        color:"#fff"
      },
    }}
});
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
        webLinks: [
          ...items.slice(0, index),
          ...items.slice(index + 1),
        ],
      },
    }).then((res) => {
      if (res.status === 200) {
        onNewData(res.data);
      }
    });
    }
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
        <Button size="medium" variant="contained" onClick={handleAddItems}>
          ADD THE NEW LINK
        </Button>
      </div>
      {items &&
        items.map((item, index) => (
          <CollectionCreateItem
            key={index}
            onNewData={(data)=>handleUpdateData(index, data)}
            onRemove={()=>handleRemoveItem(index)}
            item={item}
          />
        ))}
    </div>
  );
}
export default CollectionCreate;
