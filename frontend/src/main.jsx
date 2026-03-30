import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Admin from './Features/Authentication/Admin/Admin.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Auth from './Features/Authentication/Auth.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/admin' element={<Admin />}>
      </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
