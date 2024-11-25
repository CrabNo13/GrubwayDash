import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import './styles/App.css'

function App() {

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <SearchBar />
      <div className="flex-1 ml-64 p-4">
        Hello World
      </div>
    </div>
  )
}

export default App
