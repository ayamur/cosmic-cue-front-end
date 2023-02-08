// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import FortuneList from './pages/FortuneList/FortuneList'
import MyProfile from './pages/myProfile/myProfile'
import BlogList from './pages/BlogList/BlogList'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as fortuneService from './services/fortuneService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [fortunes, setFortunes] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllFortunes = async () => {
      const data = await fortuneService.index()
      setFortunes(data)
    
    }
    fetchAllFortunes()
  }, [user])


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Landing user={user} />} />
        <Route
          path='/signup'
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path='/login'
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path='/profiles'
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
            <Route
          path='/profiles/:id'
          element={
            <ProtectedRoute user={user}>
              <MyProfile fortunes={fortunes} user={user}/>
              {/* <FortuneList user={user} fortunes={fortunes}/> */}
            </ProtectedRoute>
          }
        />

        <Route
          path='/change-password'
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  )
}

export default App