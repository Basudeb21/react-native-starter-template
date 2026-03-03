// src\core\network\networkListener.jsx
import NetInfo from '@react-native-community/netinfo';
import { setNetworkState } from '../../store/slices/networkSlice';
import { syncEngine } from '../sync/syncEngine';

let unsubscribe = null;

export const initNetworkListener = (store) => {
    if (unsubscribe) return;

    unsubscribe = NetInfo.addEventListener(state => {
        const isOnline =
            state.isConnected && state.isInternetReachable;

        store.dispatch(
            setNetworkState({
                isConnected: state.isConnected,
                isInternetReachable: state.isInternetReachable,
            })
        );

        // Trigger sync when coming back online
        if (isOnline) {
            syncEngine.start();
        }
    });
};

export const removeNetworkListener = () => {
    if (unsubscribe) {
        unsubscribe();
        unsubscribe = null;
    }
};