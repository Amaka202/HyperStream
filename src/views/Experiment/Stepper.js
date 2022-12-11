/* eslint-disable */

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Goal',
  },
  {
    label: 'Experiment',
  },
  {
    label: 'Measurements',
  },
  {
    label: 'Feasibility',
  },
  // {
  //   label: 'Summary',
  // },
  {
    label: 'Participants',
  },
];

export default function CustomStepper({activeStep, setActiveStep}) {


  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical"
        sx={{
          '.MuiMobileStepper-dot': { backgroundColor: '#CCCCCC' },
          '.MuiMobileStepper-dotActive': { backgroundColor: '#666666' },
      }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}
            sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#817FDD !important', // circle color (COMPLETED)
                
              },
              '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                {
                  color: '#817FDD !important', // Just text label (COMPLETED)
                  fontWeight: 'bold !important',

                },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#403dd1 !important', // circle color (ACTIVE)
              },
              '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                {
                  color: '#817FDD !important', // Just text label (ACTIVE)
                  fontWeight: 'bold !important',
                },
              '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                fill: 'black', // circle's number (ACTIVE)
              },
              '& .css-o68c8a-MuiStepLabel-label': {
                color: '#515152', // circle's number (ACTIVE)
              },
              // '& .css-o68c8a-MuiStepLabel-label': {
              //   color: 'red', // circle's number (ACTIVE)
              // },
            }}
          >
            <StepLabel sx={{color: 'red'}}>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}