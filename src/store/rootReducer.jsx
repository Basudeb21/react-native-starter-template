// src\store\rootReducer.jsx
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import authReducer from './slices/authSlice';
import themeReducer from './slices/themeSlice';
import uiReducer from './slices/uiSlice';
import networkReducer from './slices/networkSlice';
import loadingReducer from './slices/loadingSlice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'theme'], // persist only these
};

const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    ui: uiReducer,
    network: networkReducer,
    loading: loadingReducer,
});

export default persistReducer(persistConfig, rootReducer);