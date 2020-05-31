import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';


const styles = makeStyles({
    root: {
      minWidth: 275,
    },
    media: {
        height: '100%',
        padding: '50%',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const card = (props) => {

    const classes = styles();

    console.log(props.picture)
    return (
        <Card className={classes.root}>
        <CardMedia
        className={classes.media}
        image={props.picture}
        title={props.name}
        />
        <CardContent>
            <Typography className={classes.title} color="primary" gutterBottom>
            {props.name}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">詳細へ</Button>
        </CardActions>
        </Card>
    );
}

export default card