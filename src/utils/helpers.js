
//fetching books
const fetchBooks = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching books:', error);
        throw new Error('Failed to fetch books. Please try again later.');
    }
}




// Transform the API response to a cleaner format
const transformData = (books) => {
    return books?.map(book => ({
        key: book.key,
        title: book.title,
        authors: book.author_name || ['Unknown Author'],
        firstPublishYear: book.first_publish_year,
        coverUrl: book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : null,
        isbn: book.isbn?.[0],
        publishedPlaces: book.publish_place?.slice(0, 3),
        publishers: book.publisher?.slice(0, 3),
    }));
}


export {transformData,fetchBooks}