import React from 'react'

function CollectionControl(props) {
    const handleClickAdd = ()=>{
        props.onReceive(true,false);
    }
    const handleClickRemove = ()=>{
        props.onReceive(false,true);
    }  
    return (
        <div className="button">
            <button onClick = {handleClickAdd}>Add new link</button>
            <button onClick = {handleClickRemove}>Remove all</button>
        </div>
    )
}

export default CollectionControl
