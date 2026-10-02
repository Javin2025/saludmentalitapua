import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Resources from './components/Resources.jsx'
import Professionals from './components/Professionals.jsx'
import Emergency from './components/Emergency.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      <Header page={page} setPage={setPage} />
      <main>
        {page === 'home' && (
          <>
            <Hero setPage={setPage} />
            <Resources />
            <Emergency />
          </>
        )}
        {page === 'recursos' && <Resources full />}
        {page === 'profesionales' && <Professionals />}
        {page === 'emergencia' && <Emergency full />}
      </main>
      <Footer />
    </div>
  )
}
