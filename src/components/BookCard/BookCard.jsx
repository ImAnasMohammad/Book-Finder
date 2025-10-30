import { Book } from "lucide-react";
import { useState } from "react";

/**
 * Book Card Component
 */
const BookCard = ({ book }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative h-64 bg-gray-100 overflow-hidden">
                {book.coverUrl && !imageError ? (
                    <img
                        src={book.coverUrl}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
                        <Book className="w-16 h-16 text-gray-400" />
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {book.title}
                </h3>

                <div className="space-y-2 text-sm">
                    <p className="text-gray-600">
                        <span className="font-semibold">Author(s):</span>{' '}
                        {book.authors.slice(0, 2).join(', ')}
                        {book.authors.length > 2 && ` +${book.authors.length - 2} more`}
                    </p>

                    {book.firstPublishYear && (
                        <p className="text-gray-600">
                            <span className="font-semibold">First Published:</span> {book.firstPublishYear}
                        </p>
                    )}

                    {book.publishers && book.publishers.length > 0 && (
                        <p className="text-gray-600">
                            <span className="font-semibold">Publisher:</span>{' '}
                            {book.publishers[0]}
                            {book.publishers.length > 1 && ` +${book.publishers.length - 1} more`}
                        </p>
                    )}

                    {book.isbn && (
                        <p className="text-gray-500 text-xs">
                            <span className="font-semibold">ISBN:</span> {book.isbn}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};


export default BookCard;