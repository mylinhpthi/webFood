import { Avatar, makeStyles, Paper,createStyles, Theme, Typography  } from '@material-ui/core'
import React, { useState } from 'react'
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        display:'flex',
        flexDirection:'column',
        border:'8px solid #65ff00',
        padding: '10px',
        width:'80%',
        borderRadius:'30px',
        backgroundImage:'linear-gradient( to bottom,#ccff00,#d8f28c,#d5f7be ,#ebfce0 )',
    },
    avatar: {
        alignItems:'center',
        margin:'10px auto',
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    item__link:{
        textDecoration:'none',
        color:'black'
    },
    item:{
        margin: ' 5px auto',
        background: '#61f450',
        width: '80%',
        textAlign:'center',
        padding:'10px'
    }
  }),
);
function CollectionItem({id, avatartURL,title, webLinks}) {
    const classes = useStyles();
    return (
        <div >
            <Paper className={classes.root}>
                <Avatar className={classes.avatar} src={avatartURL}/>
                <Typography variant='h6' align='center' gutterBottom>{title}</Typography>
                
                {webLinks.map(({link, label})=>(
                    <div className={classes.item} spacing={5} gutterBottom>
                        <a className={classes.item__link} href={link}>{label}</a>
                    </div>
                ))}
            </Paper>
        </div>
    )
}

export default CollectionItem
