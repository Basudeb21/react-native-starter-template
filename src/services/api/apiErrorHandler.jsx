// src\services\api\apiErrorHandler.jsx
const apiErrorHandler = error => {
    if (error.response) {
        return {
            status: error.response.status,
            message:
                error.response.data?.message ||
                'Something went wrong.',
            data: error.response.data,
        };
    }

    if (error.request) {
        return {
            status: 0,
            message: 'No response from server.',
        };
    }

    return {
        status: -1,
        message: error.message || 'Unexpected error.',
    };
};

export default apiErrorHandler;