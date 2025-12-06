import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import { LoadingPage } from './components/LoadingPage'
import { MainPage } from './components/MainPage'
import { Theory } from './components/Theory'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/loading" replace />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/theory" element={<Theory />} />
      </Routes>
    </Router>
  )
}

export default App