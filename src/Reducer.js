import {createSlice} from '@reduxjs/toolkit'

export const initialState = sessionStorage.getItem('mode')?sessionStorage.getItem('mode'):"dark"

export const ThemeSlice = createSlice({
    name : "themeSlice",
    initialState : {value : initialState},
    reducers : {
        TOGGLE_MODE : (state) => {
            if(state.value === "dark"){
                state.value = "light"
                document.body.style.backgroundColor = 'white'
                document.body.style.color = 'black'
                sessionStorage.setItem('mode',"light")
            }
            else if(state.value === "light"){
                state.value = "dark"
                document.body.style.backgroundColor = '#343a40'
                document.body.style.color = 'white'
                sessionStorage.setItem('mode',"dark")
            }
        }
    }
})

export const {TOGGLE_MODE} = ThemeSlice.actions
export const selectTheme = (state) => state.themeSlice