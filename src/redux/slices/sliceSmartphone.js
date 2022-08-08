import { createSlice } from "@reduxjs/toolkit";

export const sliceSmartphone = createSlice({
    name: 'smartphone',
    initialState:{
        value:[]
    },
    reducers:{
        smartphoneAction(state){
            return state.value
        }
    }
})

export const { smartphoneAction } = sliceSmartphone.actions

export default sliceSmartphone.reducer