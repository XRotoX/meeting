import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TimePicker from '../TimePicker/timePickerPhone';
import DatePicker from '../DatePicker/datePickerPhone';
import ContactInfo from '../ContactInfo/contactInfo';
import { Container } from '@mui/material';
import { useForm } from '../../utils/useForm';
import FormWrapper from '../Wrapper';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/Done';
import { database } from '../../utils/firebase'

const steps = ['Date', 'Time', 'Info'];

export default function MeetingStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [values, dispatch] = useForm();



    const meetingTime = () => {
        if(values.date && values.time){
            const date = new Date(values.date)
            const time = new Date(values.time)
            const fullDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes())
            return fullDate
        }
    }
    const meetLink = () => {
        if(values.date && values.time){
            const date = new Date(values.date)
            const time = new Date(values.time)
            const fullDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes())
            return `https://calendar.google.com/calendar/u/0/r/eventedit?text=Meeting+with+Mohammed+Rhaouti&dates=${fullDate.toISOString()}&details=For+more+details,+email+me+at:+contact@rhaouti.me.+Your+meeting+link+is:+https://meet.google.com/ptr-bmgx-ptr`    
        }
        
    }
    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const sendInfo = async () => {
        await database.reservations.add({
            ...values
        })
        handleNext()
    }

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    function getStepContent(activeStep) {
        switch (activeStep) {
            case 0:
                return <DatePicker
                    dispatch={dispatch}
                    values={values}
                    setActiveStep={setActiveStep}
                    title='Pick a date'
                    icon={<CalendarTodayIcon />}
                />
            case 1:
                return <TimePicker
                    dispatch={dispatch}
                    values={values}
                    setActiveStep={setActiveStep}
                    title='Great! Now pick a time'
                    icon={<AccessTimeIcon />}
                />
            case 2:
                return <ContactInfo
                    dispatch={dispatch}
                    values={values}
                    title="I'm Mohammed Rhaouti. And you?"
                    icon={<PersonIcon />}
                />
            default:
                return 'Unknown stepIndex'
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {
                activeStep === steps.length ? (
                    <React.Fragment >
                        <br/>
                        <FormWrapper>
                            <div title="All steps are completed. Please save your meeting." icon={<DoneIcon />}>
                            <p>Meeting time: {meetingTime().toLocaleString()}</p>

                                <br />
                                <Button href={meetLink()} variant='outlined'>Save to your calendar</Button>
                                <Button href={"https://rhaouti.me"} variant='filled'>Go back to Home</Button>
                            </div>
                        </FormWrapper>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} >
                            <Box sx={{ flex: '1 1 auto' }} />
                        </Box>
                    </React.Fragment>
                ) : (<React.Fragment >
                    <br />
                    <Container component="main" maxWidth="lg">
                        <FormWrapper>
                            {getStepContent(activeStep)}
                        </FormWrapper>
                    </Container>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={activeStep === steps.length - 1 ? sendInfo : handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
                    </Box>
                </React.Fragment>
                )
            }
        </Box>
    );
}