import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
