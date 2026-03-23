import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
        <Route path="/inscrever-se" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/download" element={<Download />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App