// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
// import FortuneList from './pages/FortuneList/FortuneList'
import MyProfile from './pages/myProfile/myProfile'

import FortuneDetails from './pages/FortuneDetails/FortuneDetails'
import NewFortune from './pages/NewFortune/NewFortune'
import RandomFortune from './pages/GetFortune/RandomFunction'
import BlogList from './pages/BlogList/BlogList'

import NewSign from './pages/NewSign/NewSign'

import BlogDetails from './pages/BlogDetails/BlogDetails'
import NewBlog from './pages/NewBlog/NewBlog'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as fortuneService from './services/fortuneService'
import * as blogService from './services/blogService'
import * as signService from './services/signService'


// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [fortunes, setFortunes] = useState([])
  const [signs, setSigns] = useState([])


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddFortune = async (fortuneData) => {
    const newFortune = await fortuneService.create(fortuneData)
    setFortunes([newFortune, ...fortunes])
    navigate(`/profiles/${user.profile}`)
  }

  useEffect(() => {
    const fetchAllFortunes = async () => {
      const data = await fortuneService.index()
      setFortunes(data)

    }
    fetchAllFortunes()
  }, [user])

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const data = await blogService.index()
      setBlogs(data)
    }
    fetchAllBlogs()
  }, [user])

  const [blogs, setBlogs] = useState([])

  const handleAddSign = async (signData) => {
    const newSign = await signService.create(signData)
    setSigns([newSign, ...signs])
    navigate('/signs')
  }


  const handleAddBlog = async (blogData) => {
    const newBlog = await blogService.create(blogData)
    setBlogs([newBlog, ...blogs])
    navigate('/blogs')
  }

  const handleDeleteBlog = async (id) => {
    const deletedBlog = await blogService.deleteBlog(id)
    setBlogs(blogs.filter(b => b._id !== deletedBlog._id))
    navigate('/blogs')
  }

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
              <Profiles user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profiles/:id'
          element={
            <ProtectedRoute user={user}>
              <MyProfile fortunes={fortunes} user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path='/fortunes/:id'
          element={
            <ProtectedRoute user={user}>
              <FortuneDetails fortunes={fortunes} user={user} />
              <MyProfile fortunes={fortunes} user={user} />
              {/* <FortuneList user={user} fortunes={fortunes}/> */}
            </ProtectedRoute>
          }
        />

        <Route
          path='/fortunes/new' element={
            <ProtectedRoute user={user}>
              <NewFortune handleAddFortune={handleAddFortune} />
            </ProtectedRoute>
          }
        />

        <Route element={
          <RandomFortune fortunes={fortunes} />
        }
          path='/fortunes'>
        </Route>

        <Route
          path='/change-password'
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs'
          element={
            <ProtectedRoute user={user}>
              <BlogList blogs={blogs} />
            </ProtectedRoute>
          }
        />
        <Route
          path='/blogs/:id'
          element={
            <ProtectedRoute user={user}>
              <BlogDetails user={user} />
            </ProtectedRoute>
          }
        />

        <Route
          path='/signs/new' element={
            <ProtectedRoute user={user}>
              <NewSign handleAddSign={handleAddSign} />
            </ProtectedRoute>
          }
        />

        <Route path='/blogs/new' element={
          <ProtectedRoute user={user}>
            <NewBlog handleAddBlog={handleAddBlog} />
          </ProtectedRoute>
        }
        />
        <Route path='/blogs/:i' element={
          <ProtectedRoute user={user}>
            <BlogDetails user={user} handleDeleteBlog={handleDeleteBlog} />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App