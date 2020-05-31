import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios'

import Input from './UI/Input/Input'
import Card from './UI/Card/Card'
import Modal from './UI/Modal/Modal'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { sizing } from '@material-ui/system';

const App = () => {


  const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    textField: {
      width: '1',
    },
    searchButton: {
      height: 40,
    },
  }));

  const [keyword, setKeyWord] = useState("")
  const [location, setLocation] = useState("")
  const [error, setError] = useState(false)
  const [shop, setShop] = useState([])

  const keyWordChangeHandler = (event) => {
    setKeyWord(event.target.value)
  }

  const locationChangeHandler = (event) => {
    setLocation(event.target.value)
  }

  const createUrl = () => {
    const baseUrl = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=29b682df383687d61a0fa21557d8f572'
    let url = baseUrl
    if (keyword) {
      url += '&name=' + keyword
    }
    if (location) {
      url += '&address=' + location
    }

    // console.log(keyword)
    // console.log(location)

    return url
  }

  const searchShopHandler = () => {

    // urlの生成
    let url = createUrl()
    axios.get(url)
    .then(response => {
      const data = response.data.rest
      setShop(data)
      // console.log(data)
    })
    .catch(error => setError(true))
  }

  const classes = styles()

  return (
    <div>

      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Grume Search
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

<p></p>

      <Grid container margin={10} >
      
        <Grid item xs={5}>
          <TextField
            className="textField"
            id="keywrod"
            label="キーワード"
            variant='outlined'
            width={1}
            fullWidth={true}
            onChange={keyWordChangeHandler} />
        </Grid>

        <Grid item xs={5}>
          <TextField
            className="textField"
            id="location"
            label="場所"
            variant='outlined'
            fullWidth={true}
            onChange={locationChangeHandler} />
        </Grid>

        <Grid item xs={2}>
        <Button
          className="searchButton"
          onClick={searchShopHandler} 
          color='primary'
          variant='outlined'
          fullWidth={true}
          style={{minWidth: '100%', minHeight: '55px'}}
          >
          検索
        </Button>
        </Grid>

      </Grid>
    
      <Grid container>
        {shop.map(data => 
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
              key={data.id}
              name={data.name}
              url={data.url}
              picture={data.image_url.shop_image1}/>
          </Grid>)}
      </Grid>
    </div>
    
  )
}

export default App
