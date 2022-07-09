import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/home/Home'
import Nomatch from './components/shared/Nomatch'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProtectedRoute from './components/auth/ProtectedRoute';
import FetchUser from './components/auth/FetchUser';

function App() {
  return (
    <>
      <Navbar />
      <FetchUser>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoute />}>
            {/* <Route path='' element={< />} /> */}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Nomatch />} />
        </Routes>
      </FetchUser>
    </>
  )
}

export default App
