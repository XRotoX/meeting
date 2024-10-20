import * as React from 'react'
import isSunday from 'date-fns/isSunday'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import { ACTIONS } from '../../utils/useForm'

export default function DatePickerDep(props) {
    const { values, dispatch, setActiveStep } = props


    const handleChange = (value) => {

        dispatch({
            type: ACTIONS.SET_ITEM,
            payload: {
                date: value
            }
        })
        setActiveStep((prevStep) => prevStep + 1)
    }

    return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
        <StaticDatePicker orientation="landscape"
            openTo="day"
            value={values.date}
            disablePast 
            shouldDisableDate={isSunday}
            onChange={
                (newValue) => {
                    handleChange(newValue)
                }
            }
            maxDate={new Date("12/12/30")}
            renderInput={
                (params) => < TextField {...params}
                />} />
    </LocalizationProvider>
    );
}
