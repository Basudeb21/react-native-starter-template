import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './src/store';
import Navigation from './src/navigation';
import { initNetworkListener } from './src/core/network/networkListener';
import { GlobalLoader } from './src/components/common';
import GlobalToast from './src/components/common/GlobalToast';
import ErrorBoundary from './src/components/core/ErrorBoundary';
import { ThemeProvider } from './src/theme';

const App = () => {

    useEffect(() => {
        initNetworkListener(store);
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ErrorBoundary>
                    <ThemeProvider>
                        <NavigationContainer>
                            <Navigation />
                            <GlobalLoader />
                            <GlobalToast />
                        </NavigationContainer>
                    </ThemeProvider>
                </ErrorBoundary>
            </PersistGate>
        </Provider>
    );
};

export default App;