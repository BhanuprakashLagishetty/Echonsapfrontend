import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label="Date of birth"
          name="dateOfBirth"
          sx={{
            '& .MuiInputBase-root': {
              height: '40px', // Adjust the height as needed
              fontSize: '0.875rem', // Adjust the font size (e.g., 14px)
            },
            '& .MuiInputLabel-root': {
              fontSize: '0.75rem', // Adjust label font size (e.g., 12px)
            },
            '& .MuiSvgIcon-root': {
              fontSize: '1.25rem', // Adjust the icon size if needed
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}


