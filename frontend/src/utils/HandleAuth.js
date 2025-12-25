import axios from 'axios';

const baseUrl = 'http://localhost:8000/auth';

// Signup
const signup = async (username, email, password) => {
    try {
        const response = await axios.post(`${baseUrl}/signup`, { username, email, password });
        return response.data;
    } catch (error) {
        console.log('Signup error:', error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

// Signin
const signin = async (email, password) => {
    try {
        const response = await axios.post(`${baseUrl}/signin`, { email, password });
        return response.data;
    } catch (error) {
        console.log('Signin error:', error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

// Logout
const logout = async () => {
    try {
        const response = await axios.post(`${baseUrl}/logout`);
        return response.data;
    } catch (error) {
        console.log('Logout error:', error.message);
        throw error;
    }
};

export { signup, signin, logout };
