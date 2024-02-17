import { LegacyCard, Checkbox } from '@shopify/polaris'
import React from 'react'
import { StartDatePicker } from './StartDatePicker'
import StartTimePicker from './StartTimePicker'

const Schedule = ({ schedule, setSchedule }) => {
    const {
        startDate,
        startTime,
        set_end_date,
        endDate,
        endTime,
    } = schedule;

    const handleSetEndDateChange = (value) => {
        setSchedule({ ...schedule, set_end_date: value })
    }

    return (
        <div>
            <LegacyCard
                title='Schedule'
                sectioned
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '20px'
                        }}
                    >
                        <StartDatePicker />
                        <StartTimePicker />
                    </div>

                    <Checkbox
                        label="Set end date"
                        checked={set_end_date}
                        onChange={handleSetEndDateChange}
                    />

                    {
                        set_end_date && (
                            <>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        gap: '20px'
                                    }}
                                >
                                    <StartDatePicker />
                                    <StartTimePicker />
                                </div>
                            </>
                        )
                    }

                </div>
            </LegacyCard>
        </div>
    )
}

export default Schedule