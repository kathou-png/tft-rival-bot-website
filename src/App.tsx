import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Commands from './components/Commands'
import About from './components/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      setCurrentPage(hash)
    }

    // Set initial page
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'commands':
        return <Commands />
      case 'about':
        return <About />
      case 'home':
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App
