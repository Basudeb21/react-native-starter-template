📱 React Native Template Project

A fully structured React Native template with Redux, AsyncStorage, Theming, API service handling, Permissions, Tabs navigation, and Utility helpers.
This template is ideal for building scalable mobile apps quickly with a modular and reusable structure.

🚀 Features

Dark and Light Theme support with toggle

Redux Toolkit + Persisted store

API Service layer with endpoints and status handling

Bottom Tabs navigation + Stack navigation

Permission handling utility

Global Loading & Toast notifications

AsyncStorage keys management

Template screens(Home, Profile, Login, Session)

📁 Folder Structure
src /
├─ api /                  # API services
├─ components /           # Reusable components(Buttons, Loader, Toast)
├─ config /               # Environment config
├─ constants /            # Colors, Navigation strings, storage keys
├─ hooks /                # Custom hooks(useAuth, useTheme, Redux hooks)
├─ navigation /           # Root navigator, Stack & Tabs navigators
├─ screens /              # Auth & App screens
├─ services /             # Permissions, other custom services
├─ storage /              # AsyncStorage keys
├─ store /                # Redux slices and store configuration
├─ theme /                # ThemeProvider and useTheme hook
├─ utils /                # Utility helpers(e.g., toast)
App.js
⚡ Installation
# Clone the repo
git clone https://github.com/yourusername/react-native-template.git
cd react - native - template

# Install dependencies
npm install
# or
yarn install

# Run the app
npx react - native run - android
npx react - native run - ios
🎨 Theming

The app supports dark and light mode:

import { useTheme } from '../theme';

const { Colors, toggleTheme } = useTheme();

<View style={ { backgroundColor: Colors.BACKGROUND } }>
    <Text style={ { color: Colors.TEXT_PRIMARY } }> Hello World </Text>
        </View>

Toggle theme: toggleTheme()

Colors are centralized in constants / Colors.Light.jsx and constants / Colors.Dark.jsx.

🗂 Redux Usage
Selectors
import { useSelector } from 'react-redux';

const isDarkMode = useSelector(state => state.theme.mode === 'dark');
const isConnected = useSelector(state => state.network.isConnected);
Dispatch Actions
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { loginSuccess, logout } from '../store/slices/authSlice';

const dispatch = useDispatch();
dispatch(toggleTheme());
dispatch(loginSuccess({ user, token }));
dispatch(logout());
Global Loading
import { startGlobalLoading, stopGlobalLoading } from '../store/slices/loadingSlice';

dispatch(startGlobalLoading());
dispatch(stopGlobalLoading());
Toasts
import { showToast } from '../store/slices/uiSlice';
dispatch(showToast({ type: 'success', message: 'Operation Successful!' }));
🌐 API Service

Example usage:

import { ApiService } from '../services/api';
import API_ENDPOINTS from '../services/api/apiEndpoints';

// GET request
const fetchProfile = async () => {
    const data = await ApiService.get(API_ENDPOINTS.PROFILE);
    console.log(data);
};

// POST request
const login = async (email, password) => {
    const data = await ApiService.post(API_ENDPOINTS.LOGIN, { email, password });
    console.log(data);
};

Handle status codes:

try {
    const profile = await ApiService.get(API_ENDPOINTS.PROFILE);
} catch (error) {
    if (error.status === 401) console.log('Session expired!');
}
📸 Permissions
import PermissionService from '../services/permissions/permissions.service';

const status = await PermissionService.check('CAMERA');
const requested = await PermissionService.request('CAMERA');
const result = await PermissionService.ensure('CAMERA');

Supports multiple permissions:

const multi = await PermissionService.ensureMultiple(['CAMERA', 'MICROPHONE']);
console.log(multi);
💾 AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';
import STORAGE_KEYS from '../storage/storageKeys';

// Save
await AsyncStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, 'token');

// Read
const token = await AsyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

// Remove
await AsyncStorage.multiRemove([
    STORAGE_KEYS.ACCESS_TOKEN,
    STORAGE_KEYS.REFRESH_TOKEN,
]);
🔧 Adding Tabs
const TAB_CONFIG = [
    ...existingTabs,
    {
        name: 'NewTab',
        component: NewScreen,
        label: 'New',
        icon: { active: 'star', inactive: 'star-outline' },
    },
];
🤝 Contributing

Fork the repo

Create a branch: git checkout - b feature / your - feature

Commit changes: git commit - m "Add feature"

Push to branch: git push origin feature / your - feature

Open a Pull Request

📝 License

MIT License – feel free to use, modify, and distribute.