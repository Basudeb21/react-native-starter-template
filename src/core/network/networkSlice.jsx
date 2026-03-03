// src\core\network\networkSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isConnected: true,
    isInternetReachable: true,
};

const networkSlice = createSlice({
    name: 'network',
    initialState,
    reducers: {
        setNetworkState: (state, action) => {
            state.isConnected = action.payload.isConnected;
            state.isInternetReachable = action.payload.isInternetReachable;
        },
    },
});

export const { setNetworkState } = networkSlice.actions;
export default networkSlice.reducer;