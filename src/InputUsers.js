import React from 'react'
import {CssBaseline,Grid,Paper,TextField,Button,AppBar,Toolbar,Typography, Icon} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import fetchProfile from './Api'
import Battle from './Battle'

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  root: {
    flexGrow: 1,
    margin:100 
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    // margin: theme.spacing.unit*2,
    // marginLeft:theme.spacing.unit*63
    width: 'auto',
    marginLeft: theme.spacing.unit * 50,
    // marginRight: theme.spacing.unit * 63,
    marginTop: theme.spacing.unit * 3,
  
    
  },
 
 
});

class CenteredGrid extends React.Component {
    state={
        user1:"",
        user2:"",
        profile1:"",
        profile2:""
    }
    

    onHandle=(event)=>{
        this.setState({
        [event.target.id]:event.target.value
        })
    }
    onSubmit=(event)=>{
        
        event.preventDefault()
 fetchProfile(this.state.user1).then((res)=>{this.setState({
           profile1:res
       })})
 fetchProfile(this.state.user2).then((res)=>{this.setState({
        profile2:res
    })})
        
     
    }
    
 render(){
     const {classes}=this.props
     console.log(this.props)
  return (
    <React.Fragment>
    <CssBaseline />
    <div className={classes.layout}>
    <Toolbar className={classes.toolbarMain} >
          <Button size="large"><SvgIcon fontSize='large'>
    <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
  </SvgIcon></Button>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
           GitBattel
          </Typography>
          
          <Button variant="outlined" >
            Sign up
          </Button>
        </Toolbar>
  
    <div className={classes.root}>
    
    <form onSubmit={this.onSubmit}>
      <Grid container spacing={24} >
        
        <Grid item xs={6} >
          <Paper className={classes.paper} ><TextField 
          id="user1"
          label="User1"
          className={classes.textField}
          onChange={this.onHandle}
          margin="normal"
          variant="outlined"
        /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><TextField
          onChange={this.onHandle}
          id="user2"
          label="User2"
          className={classes.textField}
         
          margin="normal"
          variant="outlined"
        /></Paper>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" className={classes.button}
      >
        Compare
      </Button>
      </form>
      <Battle profile1={this.state.profile1} profile2={this.state.profile2}/>
    </div>
    </div>
    </React.Fragment>
  );
}

}

export default withStyles(styles)(CenteredGrid);
