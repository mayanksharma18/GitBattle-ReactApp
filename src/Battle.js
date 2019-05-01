import React from 'react'
import {Hidden, Grid, Paper, TextField, Button, Typography, Card, CardContent, CardActions, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    
      card: {
        display: 'flex',
      },
      cardDetails: {
        flex: 1,
      },
      cardMedia: {
        width: 160,
      },
    root: {
        flexGrow: 1,
        margin: 100
    },
    
    
    

});

function Battle(props) {
    const { classes } = props;
    const profile1=props.profile1;
    const profile2=props.profile2
console.log(props)

    return (
        <div className={classes.root}>
               <Grid container spacing={40} className={classes.cardGrid}>
                
               <Grid item  xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {profile1.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {profile1.bio}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image={profile1.avatar_url}
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
              <Grid item  xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {profile2.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {profile2.bio}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image={profile2.avatar_url}
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
       
       
              </Grid>
                            
        </div>
        
        
    )
}

export default withStyles(styles)(Battle);
