import axios from 'axios';

// Strapi'nin yeni cloud URL'sini ENV'den okur, yoksa localhost kullanır
const API_URL = process.env.STRAPI_API_URL || 'https://strapi-project-xi2f.onrender.com/api';

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
        return response.data.data[0]; // Tek bir kurs
    } catch (error) {
        console.error('Failed to fetch course by slug:', error);
        return null;
    }
};

// Popüler kursları getirir
export const fetchPopularCourses = async () => {
    try {
        const response = await axios.get(
            `${API_URL}/courses?filters[isPopular][$eq]=true&populate=*`
        );
        console.log('response:', response.data.data);
        return response.data.data; // Sadece popüler kurslar
    } catch (error) {
        console.error('Failed to fetch popular courses:', error);
        return [];
    }
};


export const createOrder = async (orderData) => {
    try {
      const response = await axios.post(`${API_URL}/orders`, {
        data: orderData,
        withCredentials: false,
      });
      return response.data;
    } catch (error) {
      console.error("API Hatası:", error.response.data);
      throw error;
    }
  };

