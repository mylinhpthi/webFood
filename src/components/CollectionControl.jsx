import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react'
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
})
function CollectionControl(props) {
    const classes = useStyle();
    const handleClickAdd = ()=>{
        props.onReceive(true,false);
    }
    return (
        <div className={classes.control}>
        <Button size="medium" variant="contained" onClick = {handleClickAdd}>
          ADD THE NEW LINK
        </Button>
      </div>
    )
}

export default CollectionControl
