import { Button } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import CollectionControl from "./CollectionControl";
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
    }
    }
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

  const handleRemoveItem = (index) => {
    window.location.reload();
    setItems((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    
  };
  const NewData = (params) => {
    onNewData(params);
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
            onNewData={NewData}
            index={index}
            onReceive={handleRemoveItem}
            item={item}
          />
        ))}
    </div>
  );
}

export default CollectionCreate;
