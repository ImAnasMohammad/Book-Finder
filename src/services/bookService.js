import { fetchBooks, transformData } from "../utils/helpers";

/**
 * Service to fetch books from Open Library API
 * @param {string} title - Book title to search
 * @returns {Promise<Array>} - Array of book objects
 */
const searchBooks = async (title) => {
    if (!title.trim()) {
        return [];
    }

    try {
        const data = await fetchBooks(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}&limit=20`);
        return transformData(data?.docs);
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books. Please try again later.');
    }
};


/**
 * Service to fetch books from Open Library API
 * @returns {Promise<Array>} - Array of book objects
 */

const fetchTrendingBooks = async () => {
    try {
        const trendingBooks = await fetchBooks(`https://openlibrary.org/trending/daily.json?limit=20`);
        return transformData(trendingBooks?.works);
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books. Please try again later.');
    }
}


export {searchBooks,fetchTrendingBooks};