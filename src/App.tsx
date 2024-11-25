import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import './styles/App.css';

function App() {

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <HomePage />
    </div>
  )
};

export default App;
