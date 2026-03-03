// src/services/permissions/permissions.helpers.js

import { RESULTS } from 'react-native-permissions';

export const normalizeStatus = (status) => {
    switch (status) {
        case RESULTS.GRANTED:
            return 'granted';

        case RESULTS.DENIED:
            return 'denied';

        case RESULTS.BLOCKED:
            return 'blocked';

        case RESULTS.LIMITED:
            return 'limited';

        case RESULTS.UNAVAILABLE:
        default:
            return 'unavailable';
    }
};