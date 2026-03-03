// src/store/slices/uiSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    toast: null, // { type: 'success' | 'error' | 'info', message: string }
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showToast: (state, action) => {
            state.toast = {
                type: action.payload.type || 'info',
                message: action.payload.message || '',
            };
        },
        hideToast: (state) => {
            state.toast = null;
        },
    },
});

export const { showToast, hideToast } = uiSlice.actions;
export default uiSlice.reducer;