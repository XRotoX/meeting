import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginBottom: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -8,
    marginLeft: -12,
  },
}));

export default function FormWrapper(props) {
  const classes = useStyles()


  return (
    <div>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        {props.children.props.icon}
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.children.props.title}
        </Typography>
        <br />
        {props.children}
      </div>
    </div>
  );
}