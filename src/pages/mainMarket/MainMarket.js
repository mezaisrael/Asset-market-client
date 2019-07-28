import React, {useState} from 'react';
import {
  Grid,
  Paper,
  Button,
  ButtonGroup, 
  List, 
  ListItem,
  ListItemText,
  Typography } 
from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import Header from '../../components/header/Header'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  }
}))

const BtnTheme = createMuiTheme({
  palette: {
     primary: green,
     secondary: red,
  },
});

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});

function MainMarket() {
  const [mmThemeProvidertBalance, setMMtBalance] = useState(getMMTBalance);

  const classes = useStyles();

  //TODO: allow user to display in MMTwei or MMT
  function getMMTBalance() {
    return 2000000;
  }

  function getZapBalance() {
    return 3000000;
  }

  return(
    <ThemeProvider theme={theme}>
      
    <div className='layout'>
      <Header transparent={false}/>
    	<Grid className='container' container spacing={2} justify='space-around'>
    		<Grid item xs={12} sm={3}>
          <Paper>
            <List>
              <ListItem>
                  <Typography>MMT Balance</Typography>
                  <div className={classes.grow} />
                  <Typography variant='caption'>{getMMTBalance()}</Typography>
              </ListItem>
              <ListItem>
                <Typography>zap bal: </Typography>
                <div className={classes.grow} />
                <Typography variant='caption'>{getZapBalance()}</Typography>
              </ListItem>
            </List>
            <ThemeProvider theme={BtnTheme}>
              <ListItem>
                <Grid container justify='space-between' alignItems='stretch' spacing={1}>
                  <Grid item xs={6} lg={5}>
                    <Button color='primary' variant='contained' fullWidth style={{height: '100%'}}>Buy MMT</Button>
                  </Grid>  
                  <Grid item xs={6} lg={5}>
                    <Button color='secondary' variant='contained' fullWidth style={{height: '100%'}}>Sell MMT</Button>
                  </Grid>          
                </Grid>
              </ListItem>
            </ThemeProvider>
          </Paper>
    		</Grid>
    		<Grid item xs={12} sm={9}>
          <Paper>
            show curve
          </Paper>
    		</Grid>
    	</Grid>
    </div>
    </ThemeProvider>
  );
}

export default MainMarket;