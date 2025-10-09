import './App.css'
import Header from './components/Header.jsx'
import Welcome from './components/Welcome.jsx'
import SearchSection from './components/SearchSection.jsx'

// App component that includes Header, Welcome, and SearchSection components
function App() {
  return (
    <>
      <Header />
      <Welcome />
      <SearchSection />
    </>
  )
}

export default App
