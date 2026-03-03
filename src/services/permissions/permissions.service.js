// src/services/permissions/permissions.service.js

import {
    check,
    request,
    checkMultiple,
    requestMultiple,
    openSettings,
} from 'react-native-permissions';

import { resolvePermission } from './permissions.constants';
import { normalizeStatus } from './permissions.helpers';

class PermissionService {
    async check(permissionKey) {
        const permission = resolvePermission(permissionKey);
        const status = await check(permission);

        return normalizeStatus(status);
    }

    async request(permissionKey) {
        const permission = resolvePermission(permissionKey);
        const status = await request(permission);

        return normalizeStatus(status);
    }

    async ensure(permissionKey) {
        const current = await this.check(permissionKey);

        if (current === 'granted') {
            return { granted: true, status: current };
        }

        if (current === 'blocked') {
            return { granted: false, status: current };
        }

        const requested = await this.request(permissionKey);

        return {
            granted: requested === 'granted',
            status: requested,
        };
    }

    async ensureMultiple(permissionKeys = []) {
        const resolved = permissionKeys.map(resolvePermission);
        const statuses = await requestMultiple(resolved);

        const result = {};

        permissionKeys.forEach((key, index) => {
            const rawStatus = statuses[resolved[index]];
            const normalized = normalizeStatus(rawStatus);

            result[key] = {
                granted: normalized === 'granted',
                status: normalized,
            };
        });

        return result;
    }

    openAppSettings() {
        openSettings();
    }
}

export default new PermissionService();