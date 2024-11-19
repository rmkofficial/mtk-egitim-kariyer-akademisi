import axios from 'axios';

const API_URL = process.env.STRAPI_API_URL || 'http://localhost:1337/api';

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
        const response = await axios.get(`${API_URL}/popular-courses?populate=*`);
        return response.data.data; // Strapi'den gelen veri
    } catch (error) {
        console.error('Failed to fetch popular courses:', error);
        return [];
    }
};
