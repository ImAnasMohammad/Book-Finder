import { Book } from "lucide-react";

/**
 * Empty State Component
 */
const EmptyState = ({ searchTerm }) => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
        <Book className="w-20 h-20 text-gray-300 mb-4" />
        {searchTerm ? (
            <>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No books found</h3>
                <p className="text-gray-500 text-center max-w-md">
                    We couldn't find any books matching "<span className="font-semibold">{searchTerm}</span>".
                    Try a different search term.
                </p>
            </>
        ) : (
            <>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Start your search</h3>
                <p className="text-gray-500 text-center max-w-md">
                    Enter a book title above to discover amazing books from the Open Library collection.
                </p>
            </>
        )}
    </div>
);



export default EmptyState;