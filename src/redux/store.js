import { configureStore } from '@reduxjs/toolkit'
import sliceSmartphone from "./slices/sliceSmartphone";


export default configureStore ({
    reducer:{
        smartphone: sliceSmartphone,
    }
})