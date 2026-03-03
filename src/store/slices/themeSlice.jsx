// src\store\slices\themeSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setLight: state => {
            state.mode = 'light';
        },
        setDark: state => {
            state.mode = 'dark';
        },
        toggleTheme: state => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { setLight, setDark, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;