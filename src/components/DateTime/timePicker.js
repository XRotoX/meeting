import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import { makeStyles } from '@material-ui/core/styles';
import CountrySelect from '../Autocomplete';
import { ACTIONS } from '../../utils/useForm';
import { Container } from '@mui/material';


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#000000',
    },
}))


export default function TimePicker(props) {
    const classes = useStyles()
    const { values, dispatch, setActiveStep } = props

    const handleChange = (value) => {
        dispatch({
            type: ACTIONS.SET_ITEM,
            payload: {
                time: value
            }
        })
        // setActiveStep((prevStep) => prevStep + 1)
    }

    return (
        <div>
            <Container style={{ display: 'grid', justifyContent: 'center' }}>
                <CountrySelect values={values} dispatch={dispatch} />
            </Container>
            <br />
            <LocalizationProvider dateAdapter={AdapterDateFns} >
                <StaticTimePicker className={classes.background}
                    displayStaticWrapperAs="mobile"
                    value={values.time}
                    onChange={
                        (newValue) => {
                            handleChange(newValue);
                        }
                    }
                    renderInput={
                        (params) => < TextField {...params}
                        />} />
            </LocalizationProvider>
        </div>
    );
}