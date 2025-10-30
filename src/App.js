
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { SearchProvider } from './hooks/useSearch';
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <SearchProvider>
        <Header/>
        <Main/>
      </SearchProvider>
    </div>
  );
};

export default App;