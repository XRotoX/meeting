import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ACTIONS } from '../../utils/useForm';



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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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

export default function ContactInfo(props) {
  const classes = useStyles()

  const { values, dispatch } = props
  return (
    <form className={classes.form} noValidate onSubmit={() => { }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={values.firstName}
            autoComplete="given-name"
            onChange={(e) => dispatch({
              type: ACTIONS.SET_ITEM,
              payload: {
                firstName: e.target.value
              }
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={values.lastName}
            onChange={(e) => dispatch({
              type: ACTIONS.SET_ITEM,
              payload: {
                lastName: e.target.value
              }
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => dispatch({
              type: ACTIONS.SET_ITEM,
              payload: {
                email: e.target.value
              }
            })}
          />
        </Grid>
        <Grid item xs={12}>
              <Typography>Additional details</Typography>
              <br />
              <TextField
                variant="outlined"
                fullWidth
                name="message"
                label="Message(optional)"
                id="Message"
                value={values.company}
                onChange={(e) => dispatch({
                  type: ACTIONS.SET_ITEM,
                  payload: {
                    message: e.target.value
                  }
                })}
              />
            </Grid>
      </Grid>
    </form>
  );
}