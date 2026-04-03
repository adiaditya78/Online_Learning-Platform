import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Admin from './Features/Authentication/Admin/Admin.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Auth from './Features/Authentication/Auth.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './Features/Authentication/Login/Login.jsx'
import Signup from './Features/Authentication/Signup/Signup.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
      
      <Route element={<Auth/>}>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Route>
      <Route path='/admin' element={<Admin />}></Route>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
