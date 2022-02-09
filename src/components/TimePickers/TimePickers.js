import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider } from '@mui/lab';
import { DateTimePicker } from '@mui/lab';
import { useState } from 'react';

import s from './TimePickers.module.css';

export default function TimeDatePicker() {
  const [value, setValue] = useState('week');

  const onChange = data => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayName = days[data.getDay()];
    console.log(dayName, 'data');
    setValue({ dayName });
  };

  return (
    <div className={s.rooter}>
      <LocalizationProvider className={s.rooter} dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={props => <TextField {...props} />}
          value={value}
          onChange={newValue => {
            setValue(newValue);
          }}
          ampm={false}
          ampmInClock={true}
          className={s.rooter}
          clearable={true}
          hideTabs={true}
          disableHighlightToday={true}
          disableMaskedInput={true}
          disableCloseOnSelect={false}
          disablePast={true}
          loading={false}
          showTodayButton={true}
          showToolbar={true}
          FormControlContext={false}
        />
      </LocalizationProvider>
    </div>
  );
}
