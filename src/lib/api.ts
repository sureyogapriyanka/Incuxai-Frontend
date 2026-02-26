import axios from 'axios';

// Create an Axios instance with base configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to register a user
export const registerUser = async (data: any, token: string) => {
  try {
    const response = await apiClient.post('/auth/register', data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle Axios-specific errors
      throw new Error(error.response?.data?.message || error.message || 'An error occurred during registration');
    } else {
      // Handle other errors
      throw new Error('An unexpected error occurred');
    }
  }
};

export default apiClient;