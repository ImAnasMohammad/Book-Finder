import { Search } from "lucide-react";

/**
 * Search Bar Component
 */
const SearchBar = ({ value, onChange }) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    return (
        <div className="w-full">
            <div className="relative">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search for books by title..."
                    className="w-full px-4 py-3 pl-12 pr-4 text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    aria-label="Search books"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
        </div>
    );
};


export default SearchBar;