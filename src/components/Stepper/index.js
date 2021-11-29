import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TimePicker from '../DateTime/timePicker';
import DatePicker from '../DateTime/datePicker';
import ContactInfo from '../ContactInfo/contactInfo';
import { Container } from '@mui/material';
import { useForm } from '../../utils/useForm';

const steps = ['Date', 'Time', 'Infos'];

export default function MeetingStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [values, dispatch] = useForm();


    const isStepOptional = (step) => {
        return step === 3;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

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

    const handleReset = () => {
        setActiveStep(0);
    };

    function getStepContent(activeStep) {
        switch (activeStep) {
            case 0:
                return <DatePicker
                    dispatch={dispatch}
                    values={values}
                    setActiveStep={setActiveStep}
                />
            case 1:
                return <TimePicker
                    dispatch={dispatch}
                    values={values}
                    setActiveStep={setActiveStep}
                />
            case 2:
                return <ContactInfo
                    dispatch={dispatch}
                    values={values}
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
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you are finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} >
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (<React.Fragment >
                    <br />
                    <Container component="main" maxWidth="lg">{getStepContent(activeStep)}</Container>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}>
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {
                            isStepOptional(activeStep) && (
                                <Button color="inherit"
                                    onClick={handleSkip}
                                    sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )
                        }
                        <Button onClick={handleNext}> {activeStep === steps.length - 1 ? 'Finish' : 'Next'} </Button>
                    </Box>
                </React.Fragment>
                )
            }
        </Box>
    );
}