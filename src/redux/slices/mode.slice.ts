import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    mode: 2
}
const slice = createSlice({
        name: 'modeSlice',
        initialState,
        reducers: {
            modeLight: (state) => {
                state.mode += 1
            },
            modeDark: (state) => {
                state.mode -=1
            }
        }
    }
)
const {reducer: modeReducer, actions} = slice
const modeActions = {...actions}

export {modeActions, modeReducer}

export {}