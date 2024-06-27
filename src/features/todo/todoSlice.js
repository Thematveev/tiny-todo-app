import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: []
    },
    reducers: {

        add: (state, action) => {
            state.tasks.push(action.payload)
        }

    }
})


export const { add } = todoSlice.actions
export default todoSlice.reducer