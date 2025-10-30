import BookCard from "../BookCard/BookCard";

/**
 * Book List Component
 */
const BookList = ({ books }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
            <BookCard key={book.key} book={book} />
        ))}
    </div>
);


export default BookList;