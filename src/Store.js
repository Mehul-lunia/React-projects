import {configureStore} from '@reduxjs/toolkit'
import {ThemeSlice} from './Reducer'

const store = configureStore({
    reducer : {
        themeSlice : ThemeSlice.reducer
    }
})

export default store