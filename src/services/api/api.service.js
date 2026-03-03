import axiosInstance from './axiosInstance';

class ApiService {
    async get(url, config = {}) {
        const response = await axiosInstance.get(url, config);
        return response.data;
    }

    async post(url, data = {}, config = {}) {
        const response = await axiosInstance.post(url, data, config);
        return response.data;
    }

    async put(url, data = {}, config = {}) {
        const response = await axiosInstance.put(url, data, config);
        return response.data;
    }

    async patch(url, data = {}, config = {}) {
        const response = await axiosInstance.patch(url, data, config);
        return response.data;
    }

    async delete(url, config = {}) {
        const response = await axiosInstance.delete(url, config);
        return response.data;
    }

    async upload(url, formData, config = {}) {
        const response = await axiosInstance.post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
            ...config,
        });
        return response.data;
    }
}

export default new ApiService();