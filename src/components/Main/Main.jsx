import React, { useCallback, useEffect, useState } from 'react'
import useDebounce from '../../hooks/useBookSearch';
import {searchBooks,fetchTrendingBooks} from '../../services/bookService';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import EmptyState from '../EmptyState/EmptyState';
import BookList from '../BookList/BookList';
import useSearch from '../../hooks/useSearch';

const Main = () => {

    const [search, setSearch] = useSearch('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);

    
    // Debounce search term to avoid excessive API calls
    const debouncedSearch = useDebounce(search, 500);
    /**
     * Fetch books based on search term
    */
   const fetchBooks = useCallback(async (term) => {
       if (!term.trim()) {
           setBooks([]);
           setHasSearched(false);
           return;
        }
        
        setLoading(true);
        setError(null);
        setHasSearched(true);
        
        try {
            const results = await searchBooks(term);
            setBooks(results);
        } catch (err) {
            setError(err.message);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    }, []);
    
    const getTrendingBooks = async ()=>{
        setLoading(true);
        setError(null);
        setHasSearched(true);
        
        try {
            const results = await fetchTrendingBooks();
            setBooks(results);
        } catch (err) {
            setError(err.message);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    }
    // Trigger search when debounced term changes
    useEffect(() => {
        if(debouncedSearch){
            fetchBooks(debouncedSearch);
        }else{
            getTrendingBooks();
        }
    }, [debouncedSearch, fetchBooks]);

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Results count */}
            {hasSearched && !loading && !error && books.length > 0 && (
                <div className="mb-6">
                    <p className="text-gray-600">
                        Found <span className="font-semibold text-gray-900">{books.length}</span> books
                        {search ?
                            <> for "<span className="font-semibold text-gray-900">{search}</span>"</>:
                            <> Which are <span className="font-semibold text-gray-900">Trending Today</span></>
                        }
                    </p>
                </div>
            )}

            {/* Loading State */}
            {loading && <LoadingSpinner />}

            {/* Error State */}
            {error && !loading && <ErrorMessage message={error} />}

            {/* Empty State */}
            {!loading && !error && books.length === 0 && (
                <EmptyState searchTerm={hasSearched ? search : ''} />
            )}

            {/* Book Results */}
            {!loading && !error && books.length > 0 && <BookList books={books} />}
        </main>
    )
}

export default Main