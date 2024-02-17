import React, { useState } from 'react';
import { Label, TextField } from '@shopify/polaris';

function StartTimePicker() {
    const [selectedTime, setSelectedTime] = useState('10:52');

    const handleTimeChange = (value) => {
        setSelectedTime(value);
    };

    return (
        <div
            style={{
                flex: '1'
            }}
        >
            <Label id="sale_start_time_label" htmlFor="sale_start_time">
                Start time (GMT+06:00)
            </Label>
            <TextField
                label=""
                id="sale_start_time"
                value={selectedTime}
                onChange={handleTimeChange}
                type="time"
            />
        </div>
    );
}

export default StartTimePicker;
