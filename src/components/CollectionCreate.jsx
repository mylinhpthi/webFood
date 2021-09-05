import { makeStyles, mergeClasses } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import CollectionControl from "./CollectionControl";
import CollectionCreateItem from "./CollectionCreateItem";
const useStyle = makeStyles({
  container:{
    

  }
})
function CollectionCreate({data}) {
  const [items, setItems] = useState([]);

  const classes = useStyle();

  useEffect(() => {
    if(data)  setItems(data.webLinks)
  }, [data])

  const handleAddItems = (params) =>{
    if(params){
      if(items.length<5){
        setItems(prev=>([...prev,{label:"", link:""}]))
      }
    }
  }
 
  const handleRemoveItem = (index) =>{
    setItems((prev)=>([
        ...prev.slice(0, index),
        ...prev.slice(index+1)
    ]))
  }
  
  return (
        <div className={classes.container}>
          
          <CollectionControl onReceive={handleAddItems}/>
          {items && items.map((item, index)=>(<CollectionCreateItem key={index} index={index} onReceive={handleRemoveItem} item={item} />))}
        </div>
  );
}

export default CollectionCreate;
