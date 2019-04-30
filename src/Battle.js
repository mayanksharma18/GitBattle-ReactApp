import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Card, CardContent, CardActions, CardMedia } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 100
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
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },

});

function Battle(props) {
    const { classes } = props;
    const profile1=props.profile1;
    const profile2=props.profile2
console.log(props)

    return (
        <div className={classes.root}>
            <Grid container   direction="row"justify="space-between" alignItems="center"spacing={10}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={profile1.avatar_url}
                                    title="avatar"
                                />
                                <Typography variant="h5" component="h2">
                                    {profile1.name}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {profile1.bio}
        </Typography>
                                <Typography component="p">
                                    Repos:{profile1.public_repos}
                                </Typography>
                            </CardContent>
                            <CardActions>
                              followers: {profile1.followers}
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>


            
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Card className={classes.card}>
                            <CardContent>
                                <CardMedia
                                    className={classes.media}
                                    image={profile2.avatar_url}
                                    title="avatar"
                                />
                                <Typography variant="h5" component="h2">
                                    {profile2.name}
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    {profile2.bio}
        </Typography>
                                <Typography component="p">
                                    Repos:{profile2.public_repos}
                                </Typography>
                            </CardContent>
                            <CardActions>
                              followers: {profile2.followers}
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>


</Grid>

            
        </div>
    )
}

export default withStyles(styles)(Battle);
