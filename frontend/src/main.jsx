import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Home from './pages/Home/Home.jsx'
import Auth from './Authentication/Auth.jsx'
import Login from './Authentication/Login/Login.jsx'
import Signup from './Authentication/Signup/Signup.jsx'
import CourseList from './pages/Dashboard/Components/CourseList.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/courses' element={<CourseList/>}/>
      </Route>
      
      <Route element={<Auth/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
