import './App.css';
import { configure } from 'axios-hooks'
import LRU from 'lru-cache'
import Axios from 'axios'
import CollectionCreate from './components/CollectionCreate';
import CollectionView from './components/CollectionView';
import { Grid, makeStyles } from '@material-ui/core';
import { Height } from '@material-ui/icons';
const axios = Axios.create({
  baseURL: 'http://localhost:8000/'
})

const cache = new LRU({ max: 10 })

configure({ axios, cache })
 const useStyle = makeStyles({
  root:{
      width:'90%',
      margin:' 20px auto'
      
  }, 
  create:{
    color: '#fff',
    background:'#000',
    margin:'auto'
  },
  view:{
    margin: 'auto'
    
    
  }
 })
function App() {
  const classes = useStyle();
   return (
    <Grid container spacing={2} justifyContent="center" alignItems="center"  className = {classes.root}>
      <Grid item xs={12}  sm={6} md={3} className = {classes.create}>
        <CollectionCreate />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className = {classes.view}>
        <CollectionView />
      </Grid>
    </Grid>
  );
}

export default App;
