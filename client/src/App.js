import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/shared/home/Home'
import Nomatch from './components/shared/Nomatch'
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute'
import Movies from './components/movies/Movies'

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='movies' element={<Movies />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/*" element={<Nomatch />} />
      </Routes>
    </>
  )
}

export default App;
