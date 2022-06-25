import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import isSunday from 'date-fns/isSunday';
import { ACTIONS } from '../../utils/useForm'


export default function DatePicker(props) {

    const { values, dispatch } = props

    const handleChange = (value) => {
        dispatch({
            type: ACTIONS.SET_ITEM,
            payload: {
                date: new Date(value).toLocaleDateString()
            }
        })
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDatePicker
                label="Pick a date"
                inputFormat="MM/dd/yyyy"
                value={values.date}
                disablePast
                shouldDisableDate={isSunday}
                onChange={
                    (newValue) => {
                        handleChange(newValue)
                    }
                }
                maxDate={new Date("09/13/22")}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
