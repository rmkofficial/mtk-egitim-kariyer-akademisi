import axios from 'axios';

// API URL'yi env'den okur, yoksa default olarak localhost kullanır
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337/api';

// Tüm kursları getirir
export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses?populate=*`);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch courses:', error);
    return [];
  }
};

// Slug'a göre tek bir kurs getirir
export const fetchCourseBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/courses?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  } catch (error) {
    console.error('Failed to fetch course by slug:', error);
    return null;
  }
};

// Popüler kursları getirir
export const fetchPopularCourses = async () => {
  try {
    const response = await axios.get(`${API_URL}/courses?filters[isPopular][$eq]=true&populate=*`);
    console.log('Fetched Popular Courses:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch popular courses:', error);
    return [];
  }
};

// Sipariş oluşturur
export const createOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, { data: orderData }, {
      withCredentials: false,
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error;
  }
};
