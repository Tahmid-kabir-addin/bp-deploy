import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [
        {
            id: 1,
            changes: (
                <>
                    Increase price by 10%
                    <br />
                    Increase compare at price by 10%
                </>
            ),
            applyTo: 'Whole store',
            created: 'Sep 22 at 5:22 PM',
            status: 'Completed',
        },
        {
            id: 2,
            changes: (
                <>
                    Increase price by 5%
                    <br />
                    Increase compare at price by 15%
                </>
            ),
            applyTo: 'Whole sale',
            created: 'Sep 23 at 5:22 PM',
            status: 'Archived',
        },
        {
            id: 3,
            changes: (
                <>
                    Increase price by 5%
                    <br />
                    Increase compare at price by 15%
                </>
            ),
            applyTo: 'Whole sale',
            created: 'Sep 23 at 5:22 PM',
            status: 'Canceled',
        },
    ],
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload)
        }
    }
})

export const { 
    addTask 
} = tasksSlice.actions

export default tasksSlice.reducer;
