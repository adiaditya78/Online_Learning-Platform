import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Layout.jsx'
import Content from './Components/Content/Content.jsx'
import Admin from './pages/Admin/Admin.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <> 
      <Route path='/' element={<Layout/>}>
        <Route index element={<Content/>}/>
      </Route>

      <Route path='/admin' element={<Admin/>}>
      </Route>
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
