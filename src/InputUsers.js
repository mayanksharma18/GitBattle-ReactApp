import React from 'react'
import {CssBaseline,Grid,Paper,TextField,Button,AppBar,Toolbar,Typography, Icon} from '@material-ui/core';

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
    <Toolbar className={classes.toolbarMain}>
          <Button size="small">Subscribe</Button>
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
          
          <Button variant="outlined" size="small">
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
