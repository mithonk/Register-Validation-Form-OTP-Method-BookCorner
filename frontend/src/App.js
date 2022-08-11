import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import RegisterScreen from './screens/RegisterScreen'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000';

const App = () => {
  return (
    <Router>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<RegisterScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  )
}

export default App
