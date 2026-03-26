import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './container/Home'
import Login from './container/Login'
import Signup from './container/Signup'
import Premium from './container/Premium'
import Download from './container/Download'
import Suporte from './container/Suporte'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/download" element={<Download />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App  