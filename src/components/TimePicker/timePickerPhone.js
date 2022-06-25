import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import { ACTIONS } from '../../utils/useForm';
import { Typography } from '@material-ui/core';

export default function TimePicker(props) {
  const { values, dispatch } = props

  const handleChange = (value) => {
    console.log()
    dispatch({
      type: ACTIONS.SET_ITEM,
      payload: {
        time: new Date(value),
        timeFormatted: new Date(value).toLocaleTimeString()
      }
    })
  }

  const offsetHours = -1 * (values.timezone / 60)
  const offsetMinutes = values.timezone % 60
  const offset = "GMT " + (offsetHours > 0 ? "+" + offsetHours : offsetHours) + (offsetHours > 1 ? " hours" : " hour") + (offsetMinutes > 0 ? "and" + (values.timezone % 60) + " minutes" : "")

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileTimePicker
        label="Pick a time"
        value={values.time}
        onChange={
          (newValue) => {
            handleChange(newValue);
          }
        }
        renderInput={(params) => <TextField {...params} />}
      />
      <br />
      <Typography variant='caption'>Your timezone offset is taken into consideration: {offset}</Typography>
    </LocalizationProvider>
  );
}
