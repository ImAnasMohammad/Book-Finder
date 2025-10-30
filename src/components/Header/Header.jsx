
import useSearch from '../../hooks/useSearch'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
    const [search,setSearch] = useSearch();
    return (
        <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        {/* <Book className="w-8 h-8 text-blue-600" /> */}
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            Book Finder
                        </h1>
                    </div>
                    <p className="text-gray-600">Discover millions of books from Open Library</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header