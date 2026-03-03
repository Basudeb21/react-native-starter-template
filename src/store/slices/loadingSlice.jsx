import { createSlice } from '@reduxjs/toolkit';

const MIN_DISPLAY_TIME = 300; // Minimum loader display time in ms

const initialState = {
    globalCount: 0,           // Tracks concurrent global loaders
    buttonLoaders: {},        // Tracks individual button loaders
    minVisibleUntil: 0,       // Ensures global loader visible minimum time
};

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        // 🔹 Start Global Loader
        startGlobalLoading: (state) => {
            state.globalCount += 1;
            state.minVisibleUntil = Date.now() + MIN_DISPLAY_TIME;
        },

        // 🔹 Stop Global Loader
        stopGlobalLoading: (state) => {
            if (state.globalCount > 0) {
                state.globalCount -= 1;
            }
        },

        // 🔹 Start Button Loader
        startButtonLoading: (state, action) => {
            const key = action.payload;
            state.buttonLoaders[key] = true;
        },

        // 🔹 Stop Button Loader
        stopButtonLoading: (state, action) => {
            const key = action.payload;
            state.buttonLoaders[key] = false;
        },

        // 🔹 Reset all loaders
        resetLoading: () => initialState,
    },
});

// Export actions for use in components or Axios interceptors
export const {
    startGlobalLoading,
    stopGlobalLoading,
    startButtonLoading,
    stopButtonLoading,
    resetLoading,
} = loadingSlice.actions;

export default loadingSlice.reducer;