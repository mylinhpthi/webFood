import React, { useState } from "react";
import CollectionControl from "./CollectionControl";
import CollectionCreateItem from "./CollectionCreateItem";
function CollectionCreate() {
  const [status, setStatus] = useState([])
  const handleAddRemoveItems = (paramsAdd, paramsRemove) =>{
    if(paramsAdd){
      if(status.length<4){
        setStatus([...status,<CollectionCreateItem index={status.length++} key ={status.length} onReceive={handleRemoveAItem}/>])
      }
    }
    if(paramsRemove){
      setStatus([]);
    }
  }
  const handleRemoveAItem = (index) =>{
    var array = [...status];
    array.splice(index,1);
    setStatus([...array])
  }
  
  return (
    <div className="container">
        <div className="create__content">
          {/* add or remove */}
          {status} 
          {/* depend on signal for control */}
          <CollectionControl onReceive = {handleAddRemoveItems}/>
        </div>
    </div>
  );
}

export default CollectionCreate;
