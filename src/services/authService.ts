import axiosInstance from '../utils/axiosInstance';

export const AuthService = {
    login: async (data: {email: string, password: string}) => {
        const response = await axiosInstance.post("/auth/login", data);
        return response.data;
    },

    register: async (data: {email: string, password: string, userName: string, fullName: string}) => {
        const response = await axiosInstance.post("/auth/register", data);
        return response.data;
    },

    me: async () => {
        const response = await axiosInstance.get("/auth/me");
        return response.data;
    },

    logout: async() => {
        await axiosInstance.post("/auth/logout");
    }
}