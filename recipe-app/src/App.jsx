import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black flex">
        {/* Left Panel */}
        <div className="w-1/4 border-r border-gray-300 p-4">
          <NavBar />
        </div>

        {/* Right Panel */}
        <div className="w-3/4 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;


