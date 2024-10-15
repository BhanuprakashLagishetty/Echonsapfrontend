import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function GenderButton() {
  return (
    <FormControl sx={{ paddingLeft: "10px", color: "rgb(0,0,0.87)", marginTop: "10px", fontSize: "8px" }}>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        sx={{ fontSize: "8px" }} // Adjust font size for RadioGroup (optional)
      >
        <FormControlLabel
          value="female"
          control={<Radio sx={{ '& svg': { fontSize: 15 } }} />} 
          label="Female"
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} // Adjust the font size of the label
        />
        <FormControlLabel
          value="male"
          control={<Radio sx={{ '& svg': { fontSize: 15 } }} />} 
          label="Male"
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} // Adjust the font size of the label
        />
        <FormControlLabel
          value="other"
          control={<Radio sx={{ '& svg': { fontSize: 15 } }} />} 
          label="Other"
          sx={{ '& .MuiFormControlLabel-label': { fontSize: '15px' } }} // Adjust the font size of the label
        />
      </RadioGroup>
    </FormControl>
  );
}
