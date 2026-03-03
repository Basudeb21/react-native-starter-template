// src\config\index.js
const ENV = {
    dev: {
        BASE_URL: 'https://dev-api.yourdomain.com/api',
    },
    prod: {
        BASE_URL: 'https://api.yourdomain.com/api',
    },
};

// Change this manually for now
const CURRENT_ENV = 'dev';

const Config = {
    BASE_URL: ENV[CURRENT_ENV].BASE_URL,
    API_TIMEOUT: 15000,
    APP_VERSION: '1.0.0',
    ENABLE_LOGS: true,
};

export default Config;