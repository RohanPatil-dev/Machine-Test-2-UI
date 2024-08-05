import axios from 'axios';

const apiService = {
  signup: async (userData) => {
    try {
      const response = await axios.post('http://localhost:8081/auth/register', userData);
      return response.data.users;
    } catch (error) {
      throw error;
    }
  },

  signin: async (userData) => {
    try {
      const response = await axios.post('http://localhost:8081/auth/login', userData);
      localStorage.setItem("uid", response.data.token);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default apiService;
